import pandas as pd

def transform_users(df):

    # Remove duplicate users
    df = df.drop_duplicates()

    # Remove leading/trailing spaces
    df["full_name"] = df["full_name"].str.strip()

    # Fill missing city
    df["city"] = df["city"].fillna("Unknown")

    # Fill missing membership
    df["membership"] = df["membership"].fillna("Basic")

    # Remove rows with missing user_id
    df = df.dropna(subset=["user_id"])

    return df