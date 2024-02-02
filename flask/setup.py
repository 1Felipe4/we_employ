import csv
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


if __name__ == '__main__':
    run_export()
    recreate_db()
    import_csv_to_db('data/employees.csv', Employee)
    import_csv_to_db('data/attendance.csv', Attendance)
