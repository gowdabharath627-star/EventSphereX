from sqlalchemy import text
from config.database import engine


# ==========================================
# Execute Validation Query
# ==========================================

def run_query(query):

    with engine.connect() as conn:

        result = conn.execute(text(query))

        return result.scalar()


# ==========================================
# Validate Row Counts
# ==========================================

def validate_counts():

    print("\n========== ROW COUNT VALIDATION ==========")

    validations = [

        ("Users", "users", "dw.dim_user"),

        ("Events", "events", "dw.dim_event"),

        ("Venues", "venues", "dw.dim_venue"),

        ("Bookings", "bookings", "dw.fact_booking"),

        ("Payments", "payments", "dw.fact_payment"),

        ("Food Sales", "food_sales", "dw.fact_food_sales")

    ]

    for name, source, warehouse in validations:

        source_count = run_query(f"SELECT COUNT(*) FROM {source};")

        warehouse_count = run_query(f"SELECT COUNT(*) FROM {warehouse};")

        if source_count == warehouse_count:

            print(f"✅ {name} : PASS ({source_count})")

        else:

            print(f"❌ {name} : FAIL (Source={source_count}, DW={warehouse_count})")


# ==========================================
# Validate NULL Values
# ==========================================

def validate_nulls():

    print("\n========== NULL VALIDATION ==========")

    queries = [

        ("fact_booking.user_key",
         "SELECT COUNT(*) FROM dw.fact_booking WHERE user_key IS NULL;"),

        ("fact_booking.event_key",
         "SELECT COUNT(*) FROM dw.fact_booking WHERE event_key IS NULL;"),

        ("fact_payment.user_key",
         "SELECT COUNT(*) FROM dw.fact_payment WHERE user_key IS NULL;"),

        ("fact_food_sales.user_key",
         "SELECT COUNT(*) FROM dw.fact_food_sales WHERE user_key IS NULL;")

    ]

    for name, query in queries:

        result = run_query(query)

        if result == 0:

            print(f"✅ {name} : PASS")

        else:

            print(f"❌ {name} : {result} NULL Values")


# ==========================================
# Validate Duplicate Records
# ==========================================

def validate_duplicates():

    print("\n========== DUPLICATE VALIDATION ==========")

    queries = [

        ("dim_user",
         """
         SELECT COUNT(*)

         FROM

         (

             SELECT user_id

             FROM dw.dim_user

             GROUP BY user_id

             HAVING COUNT(*)>1

         ) x
         """),

        ("dim_event",
         """
         SELECT COUNT(*)

         FROM

         (

             SELECT event_id

             FROM dw.dim_event

             GROUP BY event_id

             HAVING COUNT(*)>1

         ) x
         """)

    ]

    for name, query in queries:

        result = run_query(query)

        if result == 0:

            print(f"✅ {name} : PASS")

        else:

            print(f"❌ {name} : {result} Duplicates")


# ==========================================
# Validate Foreign Keys
# ==========================================

def validate_foreign_keys():

    print("\n========== FOREIGN KEY VALIDATION ==========")

    query = """

    SELECT COUNT(*)

    FROM dw.fact_booking fb

    LEFT JOIN dw.dim_user du

    ON fb.user_key=du.user_key

    WHERE du.user_key IS NULL;

    """

    result = run_query(query)

    if result == 0:

        print("✅ User Foreign Key : PASS")

    else:

        print(f"❌ User Foreign Key : {result} Missing")


# ==========================================
# Final Validation Report
# ==========================================

def validation_report():

    print("\n")
    print("="*60)
    print("EVENTSPHEREX VALIDATION REPORT")
    print("="*60)

    validate_counts()

    validate_nulls()

    validate_duplicates()

    validate_foreign_keys()

    print("\n")
    print("="*60)
    print("VALIDATION COMPLETED")
    print("="*60)