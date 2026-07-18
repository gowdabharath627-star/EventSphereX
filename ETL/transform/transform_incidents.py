import pandas as pd

def transform_incidents(df):

    df = df.drop_duplicates()

    df["response_time"] = df["response_time"].fillna(0)

    return df