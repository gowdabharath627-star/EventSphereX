from fastapi import APIRouter
from sqlalchemy import text
from app.config.database import engine

router = APIRouter(
    prefix="",
    tags=["Dashboard"]
)


@router.get("/dashboard")
def dashboard():

    query = """
    SELECT

        (SELECT COUNT(*) FROM dw.dim_user) AS total_users,

        (SELECT COUNT(*) FROM dw.dim_event) AS total_events,

        (SELECT COUNT(*) FROM dw.fact_booking) AS total_bookings,

        (SELECT COUNT(*) FROM dw.fact_payment) AS total_payments,

        (SELECT COUNT(*) FROM dw.fact_food_sales) AS total_food_sales,

        (SELECT COALESCE(SUM(total_amount),0)
         FROM dw.fact_booking) AS total_revenue;
    """

    try:

        with engine.connect() as connection:

            result = connection.execute(text(query)).mappings().first()

        return {
            "total_users": result["total_users"],
            "total_events": result["total_events"],
            "total_bookings": result["total_bookings"],
            "total_payments": result["total_payments"],
            "total_food_sales": result["total_food_sales"],
            "total_revenue": float(result["total_revenue"])
        }

    except Exception as e:

        return {
            "status": "Error",
            "message": str(e)
        }
    # ==========================================
# Category Filter
# ==========================================

@router.get("/categories")
def get_categories():

    query = """
        SELECT DISTINCT category
        FROM dw.dim_event
        ORDER BY category;
    """

    with engine.connect() as conn:

        result = conn.execute(text(query))

        return [
            row.category
            for row in result
        ]