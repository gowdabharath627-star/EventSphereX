from datetime import datetime

def start_audit():

    start_time = datetime.now()

    print(f"ETL Started : {start_time}")

    return start_time


def end_audit(start_time):

    end_time = datetime.now()

    duration = end_time - start_time

    print(f"ETL Finished : {end_time}")

    print(f"Execution Time : {duration}")