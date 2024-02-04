import os
from dotenv import load_dotenv

load_dotenv()

DB_URL = os.environ.get('DATABASE_URL') or 'sqlite:///we_employ.db'