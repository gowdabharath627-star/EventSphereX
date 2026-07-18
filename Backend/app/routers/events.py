from fastapi import APIRouter, Query
from sqlalchemy import text
from app.config.database import engine

router = APIRouter()


# ==========================================
# Recent Events
# ==========================================

@router.get("/events")
def get_events(category: str = Query(default="All")):

    if category == "All":

        query = """
            SELECT
                event_id,
                event_name,
                category,
                organizer
            FROM dw.dim_event
            ORDER BY event_key DESC
            LIMIT 10;
        """

        params = {}

    else:

        query = """
            SELECT
                event_id,
                event_name,
                category,
                organizer
            FROM dw.dim_event
            WHERE category = :category
            ORDER BY event_key DESC
            LIMIT 10;
        """

        params = {
            "category": category
        }

    with engine.connect() as conn:

        result = conn.execute(text(query), params)

        return [

            {
                "event_id": row.event_id,
                "event_name": row.event_name,
                "category": row.category,
                "organizer": row.organizer
            }

            for row in result

        ]


# ==========================================
# Active Users
# ==========================================

@router.get("/users")
def get_users():

    query = """
        SELECT
            user_id,
            full_name,
            gender,
            age,
            city,
            membership
        FROM dw.dim_user
        ORDER BY user_id
        LIMIT 20;
    """

    with engine.connect() as conn:

        result = conn.execute(text(query))

        return [

            {
                "user_id": row.user_id,
                "full_name": row.full_name,
                "gender": row.gender,
                "age": row.age,
                "city": row.city,
                "membership": row.membership
            }

            for row in result

        ]