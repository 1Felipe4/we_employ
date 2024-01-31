# setup.py
from app import app, db
from models import Employee, Attendance
import json
from datetime import datetime, time
from sqlalchemy.orm import sessionmaker

def recreate_db():
    """
    The function recreates the database by dropping all existing tables and creating new ones.
    """
    with app.app_context():
        db.drop_all()
        db.create_all()


def import_data():
    """
    The `import_data` function reads employee and attendance data from JSON files, creates a database
    session, and bulk inserts the data into the corresponding tables.
    """

    # Please put json data in following path to load
    with open('data/employees.json', 'r') as file:
        employees_data = json.load(file)

    # with open('data/attendance.json', 'r') as file:
    #     attendance_data = json.load(file)
    
    with app.app_context():
        Session = sessionmaker(bind=db.engine)
        session = Session()
        try:
            # Bulk insert employees
            session.bulk_insert_mappings(Employee, employees_data)

            # Bulk insert attendance
            # session.bulk_insert_mappings(Attendance, attendance_data)

            session.commit()
            print("Data imported successfully.")
        except Exception as e:
            session.rollback()
            print(f"Error importing data: {e}")
        finally:
            session.close()

def run_setup():
    """
    The function `run_setup` sets up a database by recreating it and importing data, and then prints a
    success message.
    """
    recreate_db()
    import_data()
    print("Database setup and data imported successfully.")

# The `if __name__ == '__main__':` condition checks if the current script is being run as the main
# module. In other words, it checks if the script is being executed directly and not imported as a
# module in another script.
if __name__ == '__main__':
    run_setup()
