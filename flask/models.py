# models.py
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

# The above class represents an Employee table in a database with columns for record_id, name,
# work_id_number, email_address, country, and phone_number.
class Employee(db.Model):
    __tablename__ = 'employees'

    record_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    work_id_number = db.Column(db.String(36), unique=True)
    email_address = db.Column(db.String(255))
    country = db.Column(db.String(255))
    phone_number = db.Column(db.String(255))

# The `Attendance` class represents a table in a database that stores attendance records for
# employees, including the date, clock-in time, clock-out time, and the employee's record ID.
class Attendance(db.Model):
    __tablename__ = 'attendance'

    record_id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(255))
    clock_in = db.Column(db.String(255))
    clock_out = db.Column(db.String(255))
    employee_record_id = db.Column(db.Integer, db.ForeignKey('employees.record_id'))
    employee = db.relationship('Employee', backref=db.backref('attendance', lazy='dynamic'))

    