import pandas as pd
from config.database import engine


def extract_events():

    query = """
    SELECT *
    FROM events;
    """

    df = pd.read_sql(query, engine)

    return df