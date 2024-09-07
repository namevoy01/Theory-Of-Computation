from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from top_song import *
from typing import *

app = FastAPI()

# การตั้งค่า CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # คุณสามารถระบุโดเมนที่อนุญาตเฉพาะที่นี่
    allow_credentials=True,
    allow_methods=["*"],  # หรือระบุ HTTP methods ที่อนุญาต เช่น ["GET", "POST"]
    allow_headers=["*"],  # หรือระบุ headers ที่อนุญาต
)

@app.get("/get_all_song")
async def get_all_song():
    return await All_Songs()

@app.get("/get_all_artist")
async def get_all_artist():
    return await All_Artist()

@app.get("/get_artist/{artist_name}")
async def get_artist_songs(artist_name: str, ):
    return await search_songs_by_artist(artist_name)

@app.get("/search_songs")
async def search_songs(keyword: str, ):
    return await search_songs_by_keyword(keyword)

@app.get("/export_to_csv")
async def get_csv():
    filename = 'top_songs.csv'
    await export_to_csv(filename)
    return FileResponse(filename, media_type='text/csv', filename=filename)
