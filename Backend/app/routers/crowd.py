from fastapi import APIRouter
from sqlalchemy import text
from app.config.database import engine

router = APIRouter(
    prefix="",
    tags=["Crowd"]
)


@router.get("/crowd")
def get_crowd():

    query = """
    SELECT
        crowd_event_id,
        user_id,
        event_id,
        zone_id,
        entry_time,
        exit_time,
        crowd_density,
        heatmap_score
    FROM crowd_movement
    ORDER BY crowd_event_id;
    """

    try:

        with engine.connect() as connection:

            result = connection.execute(text(query))

            crowd = []

            for row in result:

                crowd.append(
                    {
                        "crowd_event_id": row.crowd_event_id,
                        "user_id": row.user_id,
                        "event_id": row.event_id,
                        "zone_id": row.zone_id,
                        "entry_time": str(row.entry_time),
                        "exit_time": str(row.exit_time),
                        "crowd_density": row.crowd_density,
                        "heatmap_score": row.heatmap_score
                    }
                )

        return crowd

    except Exception as e:

        return {
            "status": "Error",
            "message": str(e)
        }