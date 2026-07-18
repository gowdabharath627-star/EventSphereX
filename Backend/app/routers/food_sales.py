from fastapi import APIRouter
from sqlalchemy import text
from app.config.database import engine

router = APIRouter(
    prefix="",
    tags=["Food Sales"]
)


@router.get("/food-sales")
def get_food_sales():

    query = """
    SELECT
        sale_id,
        event_id,
        user_id,
        stall_id,
        product_category,
        quantity,
        revenue,
        wait_time,
        timestamp
    FROM food_sales
    ORDER BY sale_id;
    """

    try:

        with engine.connect() as connection:

            result = connection.execute(text(query))

            sales = []

            for row in result:

                sales.append(
                    {
                        "sale_id": row.sale_id,
                        "event_id": row.event_id,
                        "user_id": row.user_id,
                        "stall_id": row.stall_id,
                        "product_category": row.product_category,
                        "quantity": row.quantity,
                        "revenue": float(row.revenue),
                        "wait_time": row.wait_time,
                        "timestamp": str(row.timestamp)
                    }
                )

        return sales

    except Exception as e:

        return {
            "status": "Error",
            "message": str(e)
        }