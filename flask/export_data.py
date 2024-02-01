import json
import pandas as pd

def export_to_csv(data, filename):
    try:
        df = pd.DataFrame(data)
        df.to_csv(filename, index=False)
        print(f"Exported data to {filename} successfully.")
    except Exception as e:
        print(f"Error exporting data to {filename}: {e}")

if __name__ == '__main__':
    # Please put json data in following path to load
    with open('data/employees.json', 'r') as file:
        employees_data = json.load(file)
    print('loaded employees')
    with open('data/attendance.json', 'r') as file:
        attendance_data = json.load(file)
    export_to_csv(employees_data, 'data/employees.csv')
    export_to_csv(attendance_data, 'data/attendance.csv')
