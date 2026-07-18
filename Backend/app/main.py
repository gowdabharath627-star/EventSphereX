from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.dashboard import router as dashboard_router
from app.routers.charts import router as charts_router
from app.routers.events import router as events_router
from app.routers.incident import router as incident_router

from app.routers.bookings import router as bookings_router
from app.routers.payments import router as payments_router
from app.routers.food_sales import router as food_sales_router

app = FastAPI(
    title="EventSphereX API",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Existing Routers
app.include_router(dashboard_router)
app.include_router(charts_router)
app.include_router(events_router)
app.include_router(incident_router)

# New Routers
app.include_router(bookings_router)
app.include_router(payments_router)
app.include_router(food_sales_router)


@app.get("/")
def home():

    return {

        "status": "Running",

        "message": "🚀 EventSphereX Backend Running"

    }