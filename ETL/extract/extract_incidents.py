import pandas as pd
from config.database import engine


def extract_incidents():

    query = """
    SELECT *
    FROM incidents;
    """

    df = pd.read_sql(query, engine)

    return df