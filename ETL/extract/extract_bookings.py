import pandas as pd
from config.database import engine


def extract_bookings():

    query = """
    SELECT *
    FROM bookings;
    """

    df = pd.read_sql(query, engine)

    return df