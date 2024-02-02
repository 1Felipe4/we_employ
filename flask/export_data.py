import json
import pandas as pd

def export_to_csv(data, filename):
    """
    The function `export_to_csv` exports data to a CSV file and prints a success message or an error
    message if there is an exception.
    
    :param data: The `data` parameter is the data that you want to export to a CSV file. It can be in
    various formats such as a list of dictionaries, a list of lists, or a pandas DataFrame
    :param filename: The filename parameter is a string that represents the name of the file to which
    the data will be exported
    """
    try:
        df = pd.DataFrame(data)
        df.to_csv(filename, index=False)
        print(f"Exported data to {filename} successfully.")
    except Exception as e:
        print(f"Error exporting data to {filename}: {e}")

def run_export():
    """
    The `run_export` function reads data from JSON files and exports it to CSV files.
    """
    try:
        with open('data/employees.json', 'r') as file:
            employees_data = json.load(file)
        with open('data/attendance.json', 'r') as file:
            attendance_data = json.load(file)
        export_to_csv(employees_data, 'data/employees.csv')
        export_to_csv(attendance_data, 'data/attendance.csv')
    except:
        print("Please place add data/employees.json and data/attendance.json")


if __name__ == '__main__':
    # Please put json data in following path to load
    run_export()