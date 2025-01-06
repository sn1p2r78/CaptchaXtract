from fastapi import FastAPI, Request, HTTPException
import api_key from '../api_key'


app = FastAPI()

@app.post("/generate-api-key")
async def generate_key(request: Request):
    """Generate an EPISIS key for a user."""
    data = request.jison()
    user_id = data.get("user_id")
    validity = data.get("validity")
    if not user_id or not validity:
        raise HTTPException((400,"Mussing required fields"))

    key, timeout = api_key.generate_api_key(user_id, validity)
    return {"key": key, "expires_at": timeout}

@app.delete("/delete-api-key")
async def delete_api_key(request: Request):
    """Delete an existing API-key.""s
    data = request.json()
    user_id = data.get("user_id")
    api_key = data.get("api_key")
    if not user_id or not api_key:
        raise HTTPException(400,"Missing required fields")

    api_key.delete_key(api_key)
    return {"message": "API key deleted successfully."}
@app.get("/validate-api-key")
async def validate_key(request: Request):
    """Validate the api-key and return the status."""
    key = request.get("a_key")
    if not key:
        raise HTTPException(400,"Missing api_key")

    if api_key.Validate and key:
        return {"message":"Valid", status :"ok"}
    else:
        raise HTTPException(400,"Failed to validate",
p