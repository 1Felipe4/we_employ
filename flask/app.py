# app.py
from concurrent.futures import ThreadPoolExecutor
from flask import Flask, jsonify, request, send_from_directory
from helpers import check_employee_attendance, filter_bad_weather_days, get_attendance_info, get_events_data, get_exact_weeks_in_year, get_weather_data, get_workdays_and_events
from models import db, Employee, Attendance
from datetime import datetime
from flask_cors import CORS  # Import the CORS extension
import os
from dotenv import load_dotenv
from flask import Flask, request, render_template, redirect, url_for

project_root = os.path.dirname(os.path.realpath('__file__'))
template_path = os.path.join(project_root, 'app/templates')
static_path = os.path.join(project_root, 'app/static')

# Load environment variables from the .env file
load_dotenv()

# This code is setting up the Flask application and configuring the database connection.
app = Flask(__name__, template_folder=template_path, static_folder=static_path)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL') or 'sqlite:///we_employ.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
CORS(app)


@app.route('/api/solution')
def solution():
    """
    The `solution` function retrieves query parameters, processes data for each country, and returns a
    JSON response containing information about problematic employees.
    :return: a JSON response containing information about problematic employees.
    """
    # Get query parameters
    try:
        year = request.args.get('year', default=2023, type=int)
        countries = request.args.get('countries', default='all')
        problematic_employees = []
        # If countries parameter is 'all', get a list of all countries from the database
        if countries.lower() == 'all':
            all_countries = [country[0] for country in db.session.query(
                Employee.country).distinct().all()]
            print(all_countries)
        else:
            all_countries = countries.split(',')

        # Function to process a single country
        def process_country(country):
            with app.app_context():
                event_data = get_events_data(year, country)
                weather_data = get_weather_data(year, country)
                workdays_and_events = get_workdays_and_events(event_data)
                workdays_around_events = set(workdays_and_events.keys())
                bad_weather_days = filter_bad_weather_days(weather_data)
                filtered_workdays = workdays_around_events - bad_weather_days
                problematic_employee_ids = check_employee_attendance(country, filtered_workdays)
                return get_attendance_info(problematic_employee_ids, year, filtered_workdays, workdays_and_events)

        # Use ThreadPoolExecutor to process countries concurrently
        with ThreadPoolExecutor() as executor:
            results = list(executor.map(process_country, all_countries))
        print(problematic_employees)
        # Flatten the list of lists into a single list
        for result in results:
            problematic_employees+=result

        return jsonify(problematic_employees)
    except Exception as e:
        return jsonify({'error': str(e)})




# Catch-all route to serve index.html
@app.route('/', methods=['GET'])
def frontend():
    return send_from_directory('static', 'index.html')

# Catch-all route to serve static files
@app.route('/<path:filename>', methods=['GET'])
def serve_static(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(debug=True)


application = app
