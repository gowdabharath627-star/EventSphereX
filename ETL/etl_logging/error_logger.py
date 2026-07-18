import logging

error_logger = logging.getLogger("ErrorLogger")

handler = logging.FileHandler("logs/error.log")

formatter = logging.Formatter(
    "%(asctime)s | %(levelname)s | %(message)s"
)

handler.setFormatter(formatter)

error_logger.addHandler(handler)

error_logger.setLevel(logging.ERROR)