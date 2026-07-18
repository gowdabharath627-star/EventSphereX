import pandas as pd

def transform_bookings(df):

    df = df.drop_duplicates()

    df["booking_time"] = pd.to_datetime(df["booking_time"])

    df["booking_month"] = df["booking_time"].dt.month

    df["booking_year"] = df["booking_time"].dt.year

    df["booking_quarter"] = df["booking_time"].dt.quarter

    return df