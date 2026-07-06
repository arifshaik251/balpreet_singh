"""Backend API tests for Chef Balpreet Singh Chadha Portfolio API."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://culinary-nomad.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ------------------- Health / Root -------------------
class TestRoot:
    def test_root_returns_200_and_name(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Chef Balpreet" in data["message"]


# ------------------- Consultation Create + Persistence -------------------
class TestConsultationCreate:
    def test_create_consultation_valid_returns_201_and_persists(self, api_client):
        payload = {
            "name": "TEST_Jane Doe",
            "email": "test_jane@example.com",
            "project_type": "Restaurant Opening",
            "message": "We are opening a fine dining venue and need consultation.",
        }
        r = api_client.post(f"{API}/consultation", json=payload)
        assert r.status_code == 201, f"Expected 201, got {r.status_code}: {r.text}"
        body = r.json()
        assert body["name"] == payload["name"]
        assert body["email"] == payload["email"]
        assert body["project_type"] == payload["project_type"]
        assert body["message"] == payload["message"]
        assert isinstance(body["id"], str) and len(body["id"]) > 0
        assert "created_at" in body

        # Verify persistence via GET list
        r2 = api_client.get(f"{API}/consultation")
        assert r2.status_code == 200
        items = r2.json()
        assert isinstance(items, list)
        assert any(item["id"] == body["id"] for item in items), "Created record not found in GET list"

    def test_list_consultations_returns_list(self, api_client):
        r = api_client.get(f"{API}/consultation")
        assert r.status_code == 200
        assert isinstance(r.json(), list)

    def test_list_consultations_with_limit(self, api_client):
        r = api_client.get(f"{API}/consultation", params={"limit": 5})
        assert r.status_code == 200
        assert len(r.json()) <= 5


# ------------------- Consultation Validation -------------------
class TestConsultationValidation:
    def test_reject_invalid_email(self, api_client):
        r = api_client.post(f"{API}/consultation", json={
            "name": "TEST Bad Email",
            "email": "not-an-email",
            "project_type": "Menu Consultation",
            "message": "This is a long enough message.",
        })
        assert r.status_code == 422

    def test_reject_empty_name(self, api_client):
        r = api_client.post(f"{API}/consultation", json={
            "name": "",
            "email": "good@example.com",
            "project_type": "Menu Consultation",
            "message": "This is a long enough message.",
        })
        assert r.status_code == 422

    def test_reject_short_message(self, api_client):
        r = api_client.post(f"{API}/consultation", json={
            "name": "TEST Short Msg",
            "email": "good@example.com",
            "project_type": "Menu Consultation",
            "message": "hi",
        })
        assert r.status_code == 422

    def test_reject_missing_fields(self, api_client):
        r = api_client.post(f"{API}/consultation", json={"name": "TEST Only Name"})
        assert r.status_code == 422

    def test_reject_empty_project_type(self, api_client):
        r = api_client.post(f"{API}/consultation", json={
            "name": "TEST Empty PT",
            "email": "good@example.com",
            "project_type": "",
            "message": "This is a long enough message.",
        })
        assert r.status_code == 422
