import pandas as pd
from config.database import engine


def extract_users():

    query = """
    SELECT *
    FROM users;
    """

    df = pd.read_sql(query, engine)

    return df