from load.incremental_load import incremental_load
from validation.validation import validation_report

print("=" * 60)
print("         EVENTSPHEREX ETL PIPELINE")
print("=" * 60)

try:

    print("\nETL Started...\n")

    # Load Data
    incremental_load()

    # Validate Data
    validation_report()

    print("\nETL Completed Successfully.")

except Exception as e:

    print("\nETL Failed!")
    print(f"Error: {e}")