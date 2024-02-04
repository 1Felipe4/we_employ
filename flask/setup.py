import csv
import json
import sys
from app import app, db
from export_data import run_export
from models import Employee, Attendance
from sqlalchemy.orm import sessionmaker


def recreate_db():
    """
    The function recreates the database by dropping all existing tables and creating new ones.
    """
    with app.app_context():
        db.drop_all()
        db.create_all()


def import_csv_to_db(csv_filename, model_class):
    with open(csv_filename, 'r') as file:
        reader = csv.DictReader(file)
        data = [row for row in reader]

    try:
        with app.app_context():
            Session = sessionmaker(bind=db.engine)
            session = Session()

            # Bulk insert data
            session.bulk_insert_mappings(model_class, data)

            session.commit()
            print(f"Data from {csv_filename} imported successfully.")
    except Exception as e:
        print(f"Error importing data from {csv_filename}: {e}")
        session.rollback()
    finally:
        session.close()

def import_data():
    """
    The `import_data` function reads employee and attendance data from JSON files, creates a database
    session, and bulk inserts the data into the corresponding tables.
    """

    # Please put json data in following path to load
    with open('data/employees.json', 'r') as file:
        employees_data = json.load(file)
    print('loaded employees')
    with open('data/attendance.json', 'r') as file:
        attendance_data = json.load(file)
    print('loaded attendance')
    with app.app_context():
        Session = sessionmaker(bind=db.engine)
        session = Session()
        try:
            # Bulk insert employees
            session.bulk_insert_mappings(Employee, employees_data)
            print("Imported Employees")
            # Bulk insert attendance
            session.bulk_insert_mappings(Attendance, attendance_data)
            print("Imported Attendance")
            session.commit()
            print("Data imported successfully.")
        except Exception as e:
            session.rollback()
            print(f"Error importing data: {e}")
        finally:
            session.close()

def main():
    recreate_db()
    if len(sys.argv) > 1 and sys.argv[1] == '-csv':
        run_export()
        import_csv_to_db('data/employees.csv', Employee)
        import_csv_to_db('data/attendance.csv', Attendance)
    else:
        # JSON import
        import_data()



if __name__ == '__main__':
    main()
