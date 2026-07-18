import logging
import os

# Create logs folder if it doesn't exist
os.makedirs("logs", exist_ok=True)

# Configure Logger
logging.basicConfig(
    filename="logs/etl.log",
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s",
    datefmt="%d-%m-%Y %H:%M:%S"
)

logger = logging.getLogger("EventSphereX_ETL")