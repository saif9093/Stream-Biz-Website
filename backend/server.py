import asyncio
import logging
import os
import uuid
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Optional

from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter
from pydantic import BaseModel, Field, EmailStr
from starlette.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from lib.db import client, db, ensure_indexes


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.index_task = asyncio.create_task(ensure_indexes())
    yield
    client.close()


app = FastAPI(lifespan=lifespan, title="Stream Biz API")
api_router = APIRouter(prefix="/api")


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


class LeadCreate(BaseModel):
    firstName: str = Field(min_length=1)
    lastName: str = Field(min_length=1)
    email: EmailStr
    company: str = Field(min_length=1)
    phone: Optional[str] = None
    industry: Optional[str] = None
    projectType: Optional[str] = None
    projectStage: Optional[str] = None
    projectSize: Optional[str] = None
    services: List[str] = []
    timeline: Optional[str] = None
    message: Optional[str] = None
    source: str = "contact"


class Lead(LeadCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: str = Field(default_factory=now_iso)


class HealthCheckCreate(BaseModel):
    name: str = Field(min_length=1)
    company: str = Field(min_length=1)
    email: EmailStr
    phone: Optional[str] = None
    projectType: Optional[str] = None
    projectStage: Optional[str] = None
    budgetRange: Optional[str] = None
    scores: dict[str, int] = {}
    totalScore: int = Field(ge=0, le=100)


class HealthCheckResult(BaseModel):
    id: str
    totalScore: int
    tier: str
    createdAt: str


def tier_for(score: int) -> str:
    if score >= 80:
        return "Strong"
    if score >= 60:
        return "Stable"
    if score >= 40:
        return "At Risk"
    return "Critical"


@api_router.get("/")
async def root():
    return {"message": "Stream Biz API"}


@api_router.post("/leads", response_model=Lead)
async def create_lead(input: LeadCreate):
    lead = Lead(**input.model_dump())
    await db.leads.insert_one(lead.model_dump())
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def list_leads():
    docs = await db.leads.find({}, {"_id": 0}).sort("createdAt", -1).to_list(500)
    return [Lead(**d) for d in docs]


@api_router.post("/health-check", response_model=HealthCheckResult)
async def create_health_check(input: HealthCheckCreate):
    doc = input.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["tier"] = tier_for(input.totalScore)
    doc["createdAt"] = now_iso()
    await db.health_checks.insert_one(doc)
    return HealthCheckResult(**doc)


@api_router.get("/health-checks")
async def list_health_checks():
    return await db.health_checks.find({}, {"_id": 0}).sort("createdAt", -1).to_list(500)


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
