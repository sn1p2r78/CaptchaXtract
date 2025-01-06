import os
import motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Load environment variables
load_dotenv()


# Get the MongoDB URI
MONGO_URI = os.getenv("MONGO_URII")


# Initialize the MongoDB client
client = AsyncIOMotorClient(MONGO_URI)

# Access the database
db = client["mydatabase"]