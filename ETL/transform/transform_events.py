import pandas as pd

def transform_events(df):

    df = df.drop_duplicates()

    df["event_name"] = df["event_name"].str.strip()

    df["category"] = df["category"].fillna("Others")

    return df