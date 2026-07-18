from sqlalchemy import text
from config.database import engine


def execute_query(query):
    """
    Executes INSERT, UPDATE, DELETE, CREATE, and other SQL queries.
    """

    try:
        with engine.begin() as connection:
            connection.execute(text(query))

        print("✅ Query executed successfully.")

    except Exception as e:
        print(f"❌ Error executing query:\n{e}")


def fetch_data(query):
    """
    Executes SELECT queries and returns the result.
    """

    try:
        with engine.connect() as connection:
            result = connection.execute(text(query))
            return result.fetchall()

    except Exception as e:
        print(f"❌ Error fetching data:\n{e}")
        return None