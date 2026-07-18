from fastapi import APIRouter
from sqlalchemy import text
from app.config.database import engine

router = APIRouter(
    prefix="",
    tags=["Bookings"]
)


@router.get("/bookings")
def get_bookings():

    query = """
    SELECT
        booking_id,
        user_id,
        event_id,
        ticket_type,
        quantity,
        total_amount,
        booking_status,
        payment_mode
    FROM bookings
    ORDER BY booking_id;
    """

    try:

        with engine.connect() as connection:

            result = connection.execute(text(query))

            bookings = []

            for row in result:

                bookings.append(
                    {
                        "booking_id": row.booking_id,
                        "user_id": row.user_id,
                        "event_id": row.event_id,
                        "ticket_type": row.ticket_type,
                        "quantity": row.quantity,
                        "total_amount": float(row.total_amount),
                        "booking_status": row.booking_status,
                        "payment_mode": row.payment_mode
                    }
                )

        return bookings

    except Exception as e:

        return {
            "status": "Error",
            "message": str(e)
        }