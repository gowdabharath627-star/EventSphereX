from fastapi import APIRouter
from sqlalchemy import text
from app.config.database import engine

router = APIRouter()


@router.get("/top-events")
def top_events():

    query = """
        SELECT
            e.event_name,
            SUM(f.transaction_amount) AS revenue
        FROM dw.fact_payment f
        JOIN dw.dim_event e
            ON f.event_key = e.event_key
        GROUP BY e.event_name
        ORDER BY revenue DESC
        LIMIT 10;
    """

    with engine.connect() as conn:

        result = conn.execute(text(query))

        return [
            {
                "event": row.event_name,
                "revenue": float(row.revenue)
            }
            for row in result
        ]