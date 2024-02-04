from models import db, Employee, Attendance
from datetime import datetime, timedelta
import requests
from sqlalchemy import create_engine, func, or_
import settings
from sqlalchemy.dialects.sqlite import pysqlite

engine = create_engine(settings.DB_URL)


def get_events_data(year, country):
    """
    The function `get_events_data` fetches events data from a specified year and country using a
    provided URL format.

    :param year: The year parameter is used to specify the year for which you want to fetch events data.
    It is an integer value representing the year
    :param country: The country parameter is used to specify the country for which you want to fetch
    events data. It is a string that represents the name of the country
    :return: the events data in JSON format.
    """
    # Use the provided URL format to fetch events data
    events_api_url = f"https://www.pingtt.com/exam/events/?year={year}&country={country}&fields=event_date,event_name,country"
    events_data = requests.get(events_api_url).json()
    return events_data


def get_weather_data(year, country):
    """
    The function `get_weather_data` fetches weather data for a specific year and country using a
    provided URL format.

    :param year: The year parameter is used to specify the year for which you want to fetch the weather
    data. It is an integer value representing the year (e.g., 2021)
    :param country: The country parameter is used to specify the country for which you want to fetch
    weather data. It should be a string representing the name of the country
    :return: the weather data for the specified year and country.
    """
    # Use the provided URL format to fetch weather data
    weather_api_url = f"http://www.pingtt.com/exam/weather?year={year}&country={country}"
    weather_data = requests.get(weather_api_url).json()
    return weather_data


def get_workdays_and_events(events):
    """
    The function `get_workdays_and_events` takes a list of events and returns a dictionary where the
    keys are workdays (the day before, the day of, and the day after each event) and the values are the
    corresponding events.

    :param events: The parameter "events" is expected to be a list of dictionaries, where each
    dictionary represents an event. Each event dictionary should have a key "event_date" with a value
    representing the date of the event in the format "YYYY-MM-DD"
    :return: The function `get_workdays_and_events` returns a dictionary `workdays_and_events` which
    contains the workdays and their corresponding events.
    """
    workdays_and_events = {}

    for event in events:
        event_date = datetime.strptime(event['event_date'], '%Y-%m-%d').date()

        # Add the day before event if it's a workday
        day_before = event_date - timedelta(days=1)
        if day_before.weekday() < 5:  # Monday to Friday are workdays
            workdays_and_events[day_before.strftime('%Y-%m-%d')] = event

        # Add the day of the event if it's a workday
        if event_date.weekday() < 5:  # Monday to Friday are workdays
            workdays_and_events[event_date.strftime('%Y-%m-%d')] = event

        # Add the day after event if it's a workday
        day_after = event_date + timedelta(days=1)
        if day_after.weekday() < 5:  # Monday to Friday are workdays
            workdays_and_events[day_after.strftime('%Y-%m-%d')] = event

    return workdays_and_events


def filter_bad_weather_days(weather_data):
    """
    The function filters out bad weather days from a given weather data based on extreme weather
    conditions and high maximum temperature.

    :param weather_data: The `weather_data` parameter is a list of dictionaries, where each dictionary
    represents a day's weather information. Each dictionary has the following keys:
    :return: a set of dates that correspond to bad weather days.
    """
    bad_weather_days = set()

    for entry in weather_data:
        # Check for extreme weather conditions
        if (
            entry['condition'] in ['hail', 'blizzard', 'thunderstorm', 'hurricane'] or
            entry['max_temp'] > 40.0
        ):
            bad_weather_days.add(entry['date'])

    return bad_weather_days


def get_late_arrivals_subquery(country, year, filtered_workdays: set):
    """
    The function `get_late_arrivals_subquery` returns a subquery that retrieves the employee record IDs
    and the dates of late attendance for employees in a specific country and year, with certain
    filtering conditions.

    :param country: The country parameter is used to filter the employees based on their country of
    residence
    :param year: The "year" parameter is the year for which you want to retrieve the late arrivals data
    :param filtered_workdays: The parameter "filtered_workdays" is a list of dates that have been
    filtered based on certain criteria. It is used to filter the attendance records for late arrivals
    :return: a subquery that retrieves the employee record ID and a concatenated string of late
    attendance dates for employees who meet certain criteria.
    """
    print([country, sorted(filtered_workdays)])
    late_arrivals_subquery = (
        db.session.query(
            Attendance.employee_record_id,
            func.group_concat(Attendance.date).label('late_attendance_dates')
        )
        .join(Employee, Employee.record_id == Attendance.employee_record_id)
        .filter(Employee.country == country)
        .filter(func.substr(Attendance.date, 1, 4) == str(year))
        .filter(or_(
            Attendance.clock_in > '08:15:00',
            Attendance.clock_in == '',
            Attendance.clock_in.is_(None),
            Attendance.clock_out < '16:00:00',
            Attendance.clock_out == '',
            Attendance.clock_out.is_(None)
        ))
        .filter(Attendance.date.in_(filtered_workdays))
        .group_by(Attendance.employee_record_id)
        .having(func.count() > 3)  # Ensure more than 3 late attendances
    ).subquery()
    return late_arrivals_subquery


def get_average_hours_per_week_column():
    if isinstance(engine.dialect, pysqlite.dialect):
        # SQLite specific implementation
        return func.sum(func.cast(func.extract('epoch', Attendance.clock_out) -
                                  func.extract('epoch', Attendance.clock_in), db.Float)
                        / 3600 / 52).label('average_hours_per_week')
    else:
        # MariaDB/MySQL implementation
        return func.sum(func.cast(
            (func.unix_timestamp(func.str_to_date(Attendance.clock_out, '%H:%i:%s')) -
             func.unix_timestamp(func.str_to_date(Attendance.clock_in, '%H:%i:%s'))),
            db.Float
        ) / 3600 / 52).label('average_hours_per_week')


def get_attendance_info(country, year, filtered_workdays, workdays_and_events):
    """
    The function `get_attendance_info` retrieves attendance information for employees in a specific
    country and year, including their total and average hours worked per week, as well as any late
    arrival events they had.

    :param country: The country parameter is a string that represents the country for which you want to
    retrieve attendance information
    :param year: The year parameter is the year for which you want to retrieve attendance information
    :param filtered_workdays: The parameter "filtered_workdays" is a list of workdays that have been
    filtered based on certain criteria. It likely contains dates or timestamps of workdays that meet
    specific conditions or requirements
    :param workdays_and_events: The parameter "workdays_and_events" is a dictionary that contains
    information about workdays and events. The keys of the dictionary are dates in the format
    "YYYY-MM-DD" and the values are dictionaries containing information about the event on that date
    :param weeks_in_year: The parameter "weeks_in_year" represents the number of weeks in a year. It is
    an optional parameter with a default value of 52. This parameter is used to calculate the average
    hours worked per week by dividing the total hours worked by the number of weeks in a year, defaults
    to 52 (optional)
    :return: a list of dictionaries, where each dictionary represents an employee's attendance
    information. The dictionaries contain the following keys: "record_id", "name", "work_id_number",
    "email_address", "country", "phone_number", "average_hours_per_week", and "events".
    """
    late_arrivals_subquery = get_late_arrivals_subquery(
        country, year, filtered_workdays)

    results = []
    average_hours_per_week_column = get_average_hours_per_week_column()
    query_result = (
        db.session.query(
            Employee.record_id,
            Employee.name,
            Employee.work_id_number,
            Employee.email_address,
            Employee.country,
            Employee.phone_number,
            average_hours_per_week_column,
            late_arrivals_subquery.c.late_attendance_dates
        )
        .join(late_arrivals_subquery, Employee.record_id == late_arrivals_subquery.c.employee_record_id, isouter=True)
        .join(Attendance, Employee.record_id == Attendance.employee_record_id)
        .filter(Employee.country == country)
        .filter(func.substr(Attendance.date, 1, 4) == str(year))
        .group_by(Employee.record_id, Employee.name, Employee.work_id_number, Employee.email_address, Employee.country, Employee.phone_number)
        # Filter out employees with no late arrivals
        .having(late_arrivals_subquery.c.late_attendance_dates.isnot(None))
        .yield_per(500)

    )
    print(f'{country} processing')
    for employee_data in query_result:
        events = {}
        late_dates = employee_data.late_attendance_dates.split(',')
        for date in late_dates:
            if date in workdays_and_events:
                event = workdays_and_events[date]
                events[event['id']] = event

        data = {
            "record_id": employee_data.record_id,
            "name": employee_data.name,
            "work_id_number": employee_data.work_id_number,
            "email_address": employee_data.email_address,
            "country": employee_data.country,
            "phone_number": employee_data.phone_number,
            "average_hours_per_week": employee_data.average_hours_per_week,
            "events": list(events.values())
        }
        results.append(data)
    return results
