from fastapi import APIRouter, Query
from sqlalchemy import text
from app.config.database import engine

router = APIRouter()


# ==========================================
# Incident Chart
# ==========================================

@router.get("/incident-chart")
def incident_chart(category: str = Query(default="All")):

    if category == "All":

        query = """
        SELECT
            e.category,
            COUNT(i.incident_key) AS incidents
        FROM dw.fact_incident i
        JOIN dw.dim_event e
            ON i.event_key = e.event_key
        GROUP BY e.category
        ORDER BY incidents DESC;
        """

        params = {}

    else:

        query = """
        SELECT
            e.category,
            COUNT(i.incident_key) AS incidents
        FROM dw.fact_incident i
        JOIN dw.dim_event e
            ON i.event_key = e.event_key
        WHERE e.category = :category
        GROUP BY e.category
        ORDER BY incidents DESC;
        """

        params = {
            "category": category
        }

    with engine.connect() as conn:

        result = conn.execute(text(query), params)

        return [

            {
                "category": row.category,
                "incidents": int(row.incidents)
            }

            for row in result

        ]