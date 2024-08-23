from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mockup_data import allSong
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
    return allSong

@app.get("/get_all_artist")
def get_all_artist() -> List[Dict[str, Any]]:
    artist_data = {}
    
    artist_id = 1
    for song in allSong:
        artist_name = song['artist']
        if artist_name not in artist_data:
            artist_data[artist_name] = {
                'artistID': artist_id,
                'artistName': artist_name,
                'artistSong': []
            }
            artist_id += 1
        
        artist_data[artist_name]['artistSong'].append({
            'id': song['id'],
            'song': song['song'],
            'img': song['img'],
            'rank': song['rank']
        })

    return list(artist_data.values())

@app.get("/get_artist/{artist_name}")
def get_artist_song(artist_name: str) -> Dict[str, Any]:
    artist_songs = {
        'artistID': None,
        'artistName': artist_name,
        'artistSong': []
    }

    artist_id = 1
    artist_found = False
    for song in allSong:
        if song['artist'] == artist_name:
            if not artist_found:
                artist_songs['artistID'] = artist_id
                artist_found = True
            artist_songs['artistSong'].append({
                'id': song['id'],
                'song': song['song'],
                'img': song['img'],
                'rank': song['rank']
            })
            artist_id += 1

    return artist_songs