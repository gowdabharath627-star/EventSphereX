import pandas as pd

def transform_food_sales(df):

    df = df.drop_duplicates()

    return df