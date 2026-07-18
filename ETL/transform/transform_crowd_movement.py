import pandas as pd

def transform_crowd_movement(df):

    # Remove duplicate records
    df = df.drop_duplicates()

    return df