from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:9000"],  # Update to match frontend port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/farms")
async def get_farms():
    farms_file = Path(__file__).parent / "data" / "farms.json"
    with open(farms_file, 'r') as f:
        farms_data = json.load(f)
    return farms_data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
