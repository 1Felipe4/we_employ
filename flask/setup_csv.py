import csv
from sqlalchemy.orm import sessionmaker
from models import db, Employee, Attendance
from setup import recreate_db
from app import app


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


if __name__ == '__main__':
    recreate_db()
    import_csv_to_db('data/employee.csv', Employee)
    # Usage example for importing Attendance data
    import_csv_to_db('data/attendance.csv', Attendance)
