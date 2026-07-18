from load.load_dimensions import (
    load_dim_user,
    load_dim_event,
    load_dim_venue,
    load_dim_membership,
    load_dim_payment_mode,
    load_dim_ticket_type,
    load_dim_food
)

from load.load_fact_tables import (
    load_fact_booking,
    load_fact_payment,
    load_fact_food_sales,
    load_fact_incident,
    load_fact_crowd
)


def incremental_load():

    print("=" * 60)
    print("LOADING DIMENSION TABLES")
    print("=" * 60)

    load_dim_user()
    load_dim_event()
    load_dim_venue()
    load_dim_membership()
    load_dim_payment_mode()
    load_dim_ticket_type()
    load_dim_food()

    print("=" * 60)
    print("LOADING FACT TABLES")
    print("=" * 60)

    load_fact_booking()
    load_fact_payment()
    load_fact_food_sales()
    load_fact_incident()
    load_fact_crowd()

    print("=" * 60)
    print("INCREMENTAL LOAD COMPLETED")
    print("=" * 60)