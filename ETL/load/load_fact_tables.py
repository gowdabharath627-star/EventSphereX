from load.load_utils import execute_query


# ==========================================
# LOAD FACT BOOKING
# ==========================================

def load_fact_booking():

    query = """

    INSERT INTO dw.fact_booking
    (
        date_key,
        user_key,
        event_key,
        venue_key,
        ticket_key,
        payment_mode_key,
        quantity,
        ticket_price,
        discount,
        total_amount
    )

    SELECT

        dd.date_key,
        du.user_key,
        de.event_key,
        dv.venue_key,
        dtt.ticket_key,
        dpm.payment_mode_key,

        b.quantity,
        b.ticket_price,
        b.discount,
        b.total_amount

    FROM bookings b

    JOIN events e
        ON b.event_id=e.event_id

    JOIN dw.dim_user du
        ON b.user_id=du.user_id

    JOIN dw.dim_event de
        ON b.event_id=de.event_id

    JOIN dw.dim_venue dv
        ON e.venue_id=dv.venue_id

    JOIN dw.dim_date dd
        ON DATE(b.booking_time)=dd.full_date

    JOIN dw.dim_ticket_type dtt
        ON b.ticket_type=dtt.ticket_type

    JOIN dw.dim_payment_mode dpm
        ON b.payment_mode=dpm.payment_mode;

    """

    execute_query(query)

    print("✓ fact_booking Loaded")


# ==========================================
# LOAD FACT PAYMENT
# ==========================================

def load_fact_payment():

    query = """

    INSERT INTO dw.fact_payment
    (
        date_key,
        event_key,
        user_key,
        transaction_amount,
        gateway_response_time
    )

    SELECT

        dd.date_key,
        de.event_key,
        du.user_key,

        p.transaction_amount,
        p.gateway_response_time

    FROM payments p

    JOIN bookings b
        ON p.booking_id=b.booking_id

    JOIN dw.dim_date dd
        ON DATE(p.timestamp)=dd.full_date

    JOIN dw.dim_event de
        ON b.event_id=de.event_id

    JOIN dw.dim_user du
        ON b.user_id=du.user_id;

    """

    execute_query(query)

    print("✓ fact_payment Loaded")


# ==========================================
# LOAD FACT FOOD SALES
# ==========================================

def load_fact_food_sales():

    query = """

    INSERT INTO dw.fact_food_sales
    (
        food_key,
        date_key,
        event_key,
        user_key,
        quantity,
        revenue,
        wait_time
    )

    SELECT

        df.food_key,
        dd.date_key,
        de.event_key,
        du.user_key,

        fs.quantity,
        fs.revenue,
        fs.wait_time

    FROM food_sales fs

    JOIN dw.dim_food df
        ON fs.product_category=df.product_category

    JOIN dw.dim_date dd
        ON DATE(fs.timestamp)=dd.full_date

    JOIN dw.dim_event de
        ON fs.event_id=de.event_id

    JOIN dw.dim_user du
        ON fs.user_id=du.user_id;

    """

    execute_query(query)

    print("✓ fact_food_sales Loaded")


# ==========================================
# LOAD FACT INCIDENT
# ==========================================

def load_fact_incident():

    query = """

    INSERT INTO dw.fact_incident
    (
        date_key,
        event_key,
        response_time
    )

    SELECT

        dd.date_key,
        de.event_key,
        i.response_time

    FROM incidents i

    JOIN dw.dim_date dd
        ON DATE(i.timestamp)=dd.full_date

    JOIN dw.dim_event de
        ON i.event_id=de.event_id;

    """

    execute_query(query)

    print("✓ fact_incident Loaded")


# ==========================================
# LOAD FACT CROWD
# ==========================================

def load_fact_crowd():

    query = """

    INSERT INTO dw.fact_crowd
    (
        date_key,
        event_key,
        user_key,
        heatmap_score
    )

    SELECT

        dd.date_key,
        de.event_key,
        du.user_key,
        c.heatmap_score

    FROM crowd_movement c

    JOIN dw.dim_date dd
        ON DATE(c.entry_time)=dd.full_date

    JOIN dw.dim_event de
        ON c.event_id=de.event_id

    JOIN dw.dim_user du
        ON c.user_id=du.user_id;

    """

    execute_query(query)

    print("✓ fact_crowd Loaded")