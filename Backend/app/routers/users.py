from fastapi import APIRouter
from sqlalchemy import text
from app.config.database import engine

router = APIRouter(
    tags=["Users"]
)

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