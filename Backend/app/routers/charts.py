from fastapi import APIRouter, Query
from sqlalchemy import text
from app.config.database import engine

router = APIRouter()


# ==========================================
# Revenue Chart
# ==========================================

@router.get("/revenue-chart")
def revenue_chart(category: str = Query(default="All")):

    if category == "All":

        query = """
            SELECT
                d.month_name,
                d.month,
                SUM(f.transaction_amount) AS revenue
            FROM dw.fact_payment f
            JOIN dw.dim_date d
                ON f.date_key = d.date_key
            GROUP BY d.month, d.month_name
            ORDER BY d.month;
        """

        params = {}

    else:

        query = """
            SELECT
                d.month_name,
                d.month,
                SUM(f.transaction_amount) AS revenue
            FROM dw.fact_payment f
            JOIN dw.dim_date d
                ON f.date_key = d.date_key
            JOIN dw.dim_event e
                ON f.event_key = e.event_key
            WHERE e.category = :category
            GROUP BY d.month, d.month_name
            ORDER BY d.month;
        """

        params = {"category": category}

    with engine.connect() as conn:

        result = conn.execute(text(query), params)

        return [
            {
                "month": row.month_name,
                "revenue": float(row.revenue)
            }
            for row in result
        ]


# ==========================================
# Booking Chart
# ==========================================

@router.get("/booking-chart")
def booking_chart(category: str = Query(default="All")):

    if category == "All":

        query = """
            SELECT
                e.category,
                SUM(f.quantity) AS bookings
            FROM dw.fact_booking f
            JOIN dw.dim_event e
                ON f.event_key = e.event_key
            GROUP BY e.category
            ORDER BY bookings DESC;
        """

        params = {}

    else:

        query = """
            SELECT
                e.category,
                SUM(f.quantity) AS bookings
            FROM dw.fact_booking f
            JOIN dw.dim_event e
                ON f.event_key = e.event_key
            WHERE e.category = :category
            GROUP BY e.category
            ORDER BY bookings DESC;
        """

        params = {
            "category": category
        }

    with engine.connect() as conn:

        result = conn.execute(text(query), params)

        return [
            {
                "category": row.category,
                "bookings": int(row.bookings)
            }
            for row in result
        ]
    # ==========================================
# Food Sales Chart
# ==========================================
# ==========================================
# Food Sales Chart
# ==========================================

@router.get("/food-chart")
def food_chart(category: str = Query(default="All")):

    if category == "All":

        query = """
            SELECT
                d.product_category,
                SUM(f.revenue) AS revenue
            FROM dw.fact_food_sales f
            JOIN dw.dim_food d
                ON f.food_key = d.food_key
            GROUP BY d.product_category
            ORDER BY revenue DESC;
        """

        params = {}

    else:

        query = """
            SELECT
                d.product_category,
                SUM(f.revenue) AS revenue
            FROM dw.fact_food_sales f
            JOIN dw.dim_food d
                ON f.food_key = d.food_key
            JOIN dw.dim_event e
                ON f.event_key = e.event_key
            WHERE e.category = :category
            GROUP BY d.product_category
            ORDER BY revenue DESC;
        """

        params = {
            "category": category
        }

    with engine.connect() as conn:

        result = conn.execute(text(query), params)

        return [

            {
                "category": row.product_category,
                "revenue": float(row.revenue)
            }

            for row in result

        ]


#==========================================
# Top Revenue Events
# ==========================================

@router.get("/top-events")
def top_events(category: str = Query(default="All")):

    if category == "All":

        query = """
            SELECT
                e.event_name,
                SUM(fp.transaction_amount) AS revenue
            FROM dw.fact_payment fp
            JOIN dw.dim_event e
                ON fp.event_key = e.event_key
            GROUP BY e.event_name
            ORDER BY revenue DESC
            LIMIT 10;
        """

        params = {}

    else:

        query = """
            SELECT
                e.event_name,
                SUM(fp.transaction_amount) AS revenue
            FROM dw.fact_payment fp
            JOIN dw.dim_event e
                ON fp.event_key = e.event_key
            WHERE e.category = :category
            GROUP BY e.event_name
            ORDER BY revenue DESC
            LIMIT 10;
        """

        params = {
            "category": category
        }

    with engine.connect() as conn:

        result = conn.execute(text(query), params)

        return [

            {
                "event": row.event_name,
                "revenue": float(row.revenue)
            }

            for row in result

        ]
    # ==========================================
# Crowd Analytics
# ==========================================

@router.get("/crowd-chart")
def crowd_chart(category: str = Query(default="All")):

    if category == "All":

        query = """
            SELECT
                e.category,
                ROUND(AVG(c.heatmap_score),2) AS crowd_score
            FROM dw.fact_crowd c
            JOIN dw.dim_event e
                ON c.event_key = e.event_key
            GROUP BY e.category
            ORDER BY crowd_score DESC;
        """

        params = {}

    else:

        query = """
            SELECT
                e.category,
                ROUND(AVG(c.heatmap_score),2) AS crowd_score
            FROM dw.fact_crowd c
            JOIN dw.dim_event e
                ON c.event_key = e.event_key
            WHERE e.category = :category
            GROUP BY e.category
            ORDER BY crowd_score DESC;
        """

        params = {
            "category": category
        }

    with engine.connect() as conn:

        result = conn.execute(text(query), params)

        return [

            {
                "category": row.category,
                "crowd_score": float(row.crowd_score)
            }

            for row in result

        ]