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
    allow_headers=["*"],  # หรือระบุ headers ที่อนุญาต\
)

@app.get("/get_all_song")
def get_all_song():
    allSong = All_Songs()
    return allSong

@app.get("/get_all_artist")
def get_all_artist():
    allArtist = All_Artist()
    return allArtist

@app.get("/get_artist/{artist_name}")
def get_artist_songs(artist_name: str):
    artist_songs = search_songs_by_artist(artist_name)
    return artist_songs

@app.get("/search_songs")
def search_songs(keyword: str):
    search_results = search_songs_by_keyword(keyword)
    return search_results

@app.get("/export_to_csv")
def get_csv():
    filename = 'top_songs.csv'
    export_to_csv(filename)
    return FileResponse(filename, media_type='text/csv', filename=filename)