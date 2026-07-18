import pandas as pd
from config.database import engine


def extract_food_sales():

    query = """
    SELECT *
    FROM food_sales;
    """

    df = pd.read_sql(query, engine)

    return df