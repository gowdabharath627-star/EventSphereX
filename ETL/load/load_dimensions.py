from load.load_utils import execute_query


# ==========================================
# LOAD USER DIMENSION
# ==========================================

def load_dim_user():

    query = """

    INSERT INTO dw.dim_user
    (
        user_id,
        full_name,
        gender,
        age,
        city,
        membership
    )

    SELECT
        user_id,
        full_name,
        gender,
        age,
        city,
        membership

    FROM users u

    WHERE NOT EXISTS
    (
        SELECT 1
        FROM dw.dim_user d
        WHERE d.user_id=u.user_id
    );

    """

    execute_query(query)

    print("✓ dim_user Loaded")


# ==========================================
# LOAD EVENT DIMENSION
# ==========================================

def load_dim_event():

    query = """

    INSERT INTO dw.dim_event
    (
        event_id,
        event_name,
        category,
        organizer
    )

    SELECT
        event_id,
        event_name,
        category,
        organizer

    FROM events e

    WHERE NOT EXISTS
    (
        SELECT 1
        FROM dw.dim_event d
        WHERE d.event_id=e.event_id
    );

    """

    execute_query(query)

    print("✓ dim_event Loaded")


# ==========================================
# LOAD VENUE DIMENSION
# ==========================================

def load_dim_venue():

    query = """

    INSERT INTO dw.dim_venue
    (
        venue_id,
        venue_name,
        city,
        capacity,
        indoor_outdoor
    )

    SELECT
        venue_id,
        venue_name,
        city,
        capacity,
        indoor_outdoor

    FROM venues v

    WHERE NOT EXISTS
    (
        SELECT 1
        FROM dw.dim_venue d
        WHERE d.venue_id=v.venue_id
    );

    """

    execute_query(query)

    print("✓ dim_venue Loaded")


# ==========================================
# LOAD MEMBERSHIP DIMENSION
# ==========================================

def load_dim_membership():

    query = """

    INSERT INTO dw.dim_membership
    (
        membership
    )

    SELECT DISTINCT
        membership

    FROM users

    WHERE membership IS NOT NULL

    ON CONFLICT DO NOTHING;

    """

    execute_query(query)

    print("✓ dim_membership Loaded")


# ==========================================
# LOAD PAYMENT MODE DIMENSION
# ==========================================

def load_dim_payment_mode():

    query = """

    INSERT INTO dw.dim_payment_mode
    (
        payment_mode
    )

    SELECT DISTINCT
        payment_mode

    FROM bookings

    WHERE payment_mode IS NOT NULL

    ON CONFLICT DO NOTHING;

    """

    execute_query(query)

    print("✓ dim_payment_mode Loaded")


# ==========================================
# LOAD TICKET TYPE DIMENSION
# ==========================================

def load_dim_ticket_type():

    query = """

    INSERT INTO dw.dim_ticket_type
    (
        ticket_type
    )

    SELECT DISTINCT
        ticket_type

    FROM bookings

    WHERE ticket_type IS NOT NULL

    ON CONFLICT DO NOTHING;

    """

    execute_query(query)

    print("✓ dim_ticket_type Loaded")


# ==========================================
# LOAD FOOD DIMENSION
# ==========================================

def load_dim_food():

    query = """

    INSERT INTO dw.dim_food
    (
        product_category
    )

    SELECT DISTINCT
        product_category

    FROM food_sales

    WHERE product_category IS NOT NULL

    ON CONFLICT DO NOTHING;

    """

    execute_query(query)

    print("✓ dim_food Loaded")