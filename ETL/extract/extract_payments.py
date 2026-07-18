import pandas as pd
from config.database import engine


def extract_payments():

    query = """
    SELECT *
    FROM payments;
    """

    df = pd.read_sql(query, engine)

    return df