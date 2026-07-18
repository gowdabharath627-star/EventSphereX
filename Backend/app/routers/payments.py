from fastapi import APIRouter
from sqlalchemy import text
from app.config.database import engine

router = APIRouter(
    prefix="",
    tags=["Payments"]
)


@router.get("/payments")
def get_payments():

    query = """
    SELECT
        transaction_id,
        booking_id,
        transaction_amount,
        transaction_status,
        gateway_response_time,
        failure_code,
        timestamp
    FROM payments
    ORDER BY transaction_id;
    """

    try:

        with engine.connect() as connection:

            result = connection.execute(text(query))

            payments = []

            for row in result:

                payments.append(
                    {
                        "transaction_id": row.transaction_id,
                        "booking_id": row.booking_id,
                        "transaction_amount": float(row.transaction_amount),
                        "transaction_status": row.transaction_status,
                        "gateway_response_time": row.gateway_response_time,
                        "failure_code": row.failure_code,
                        "timestamp": str(row.timestamp)
                    }
                )

        return payments

    except Exception as e:

        return {
            "status": "Error",
            "message": str(e)
        }