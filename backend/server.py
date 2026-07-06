from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Chef Balpreet Singh Chadha — Portfolio API")
api_router = APIRouter(prefix="/api")


# ------------------- Models -------------------
class ConsultationInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    project_type: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ConsultationInquiryCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    project_type: str = Field(min_length=1, max_length=80)
    message: str = Field(min_length=5, max_length=4000)


class ConsultationInquiryPublic(BaseModel):
    id: str
    name: str
    email: EmailStr
    project_type: str
    message: str
    created_at: datetime


# ------------------- Routes -------------------
@api_router.get("/")
async def root():
    return {"message": "Chef Balpreet Singh Chadha — Portfolio API"}


@api_router.post("/consultation", response_model=ConsultationInquiryPublic, status_code=201)
async def create_consultation(payload: ConsultationInquiryCreate):
    inquiry = ConsultationInquiry(**payload.model_dump())
    doc = inquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.consultation_inquiries.insert_one(doc)
    return ConsultationInquiryPublic(**inquiry.model_dump())


@api_router.get("/consultation", response_model=List[ConsultationInquiryPublic])
async def list_consultations(limit: int = 50):
    docs = await db.consultation_inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return [ConsultationInquiryPublic(**d) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
