import pandas as pd
from config.database import engine


def extract_crowd_movement():

    query = """
    SELECT *
    FROM crowd_movement;
    """

    df = pd.read_sql(query, engine)

    return df