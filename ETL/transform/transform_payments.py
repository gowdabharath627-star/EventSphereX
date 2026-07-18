import pandas as pd

def transform_payments(df):

    # Remove duplicate records
    df = df.drop_duplicates()

    # Convert transaction status to uppercase
    df["transaction_status"] = df["transaction_status"].str.upper()

    # Fill missing failure codes
    df["failure_code"] = df["failure_code"].fillna("NONE")

    # Convert timestamp to datetime
    df["timestamp"] = pd.to_datetime(df["timestamp"])

    return df