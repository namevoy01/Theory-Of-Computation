import aiohttp
from bs4 import BeautifulSoup
import re
import random
import csv
from datetime import datetime, timedelta

cache_expiration = timedelta(minutes=5)
cache_data = None
cache_timestamp = None
etag = None
last_modified = None

########## SCAP WEB ##########

async def fetch_real_time_data():
    global cache_data, cache_timestamp, etag, last_modified
    
    async with aiohttp.ClientSession() as session:
        headers = {}
        if etag:
            headers['If-None-Match'] = etag
        if last_modified:
            headers['If-Modified-Since'] = last_modified

        async with session.get('https://www.billboard.com/charts/billboard-200/', headers=headers) as response:
            if response.status == 304: 
                return cache_data
            
            r = await response.text()
            soup = BeautifulSoup(r, 'html.parser')

            pattern = re.compile(r'^c.*trucate')

            h3_list = soup.find_all('h3', class_=pattern) 
            span_list = soup.find_all('span', class_=pattern)
            img_list = soup.find_all('img', class_=re.compile(r'^c-lazy-image')) 

            img_to_append = []
            for img in img_list:
                chart_img = re.findall(r'.*charts(?!.*344x344).*', img['data-lazy-src'])
                if chart_img:
                    img_to_append.extend(chart_img)
            img_to_append = img_to_append[1::]

            cache_data = (h3_list, span_list, img_to_append)
            cache_timestamp = datetime.now()
            etag = response.headers.get('ETag')
            last_modified = response.headers.get('Last-Modified')

            return cache_data

async def artist_song_image():
    h3_list, span_list, img_to_append = await fetch_real_time_data()
    
    x = []
    for i in range(len(h3_list)):
        x.append({'Artist' : span_list[i].string.strip(),
                'Song' : h3_list[i].string.strip(),
                'Image' : img_to_append[i]})

    return x

########## MANAGE DATA ##########

async def All_Songs():
    data = await artist_song_image()
    allSong = []
    song_id = 1

    for rank, song in enumerate(data, start=1):
        song_info = {
            'id': song_id,
            'artist': song['Artist'],
            'song': song['Song'],
            'img': song['Image'],
            'rank': str(rank)
        }
        
        allSong.append(song_info)
        song_id += 1

    return allSong

async def All_Artist():
    allSong = await All_Songs()
    artist_data = {}
    
    artist_id = 1
    for song in allSong:
        artist_name = song['artist']
        if artist_name not in artist_data:
            artist_data[artist_name] = {
                'artistID': artist_id,
                'artistName': artist_name,
                'artistImg' : '',
                'artistSong': []
            }
            artist_id += 1
        
        artist_data[artist_name]['artistSong'].append({
            'id': song['id'],
            'song': song['song'],
            'img': song['img'],
            'rank': song['rank']
        })

    for artist_name, artist_info in artist_data.items():
        artist_songs = artist_info['artistSong']
        random_song = random.choice(artist_songs)
        artist_info['artistImg'] = random_song['img']

    artist_data = sorted(artist_data.values(), key=lambda x: x['artistName'])

    return artist_data

async def search_songs_by_artist(artist_name):
    allSong = await All_Songs()
    
    artist_songs = {
        'artistID': None,
        'artistName': artist_name,
        'artistSong': []
    }

    artist_id = 1
    artist_found = False
    for song in allSong:
        if '-' in artist_name:
            artist_name = artist_name.replace('-', '/')

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

async def search_songs_by_keyword(keyword: str):
    data = await All_Songs()

    if not keyword.strip():
        return data

    search_results = []
    for song_info in data:
        if keyword.lower() in song_info['artist'].lower() or keyword.lower() in song_info['song'].lower():
            search_results.append(song_info)

    if not search_results:
        return "Not Found"
    
    return search_results

async def export_to_csv(filename):
    data = await All_Songs()

    fieldnames = ['Rank', 'SongName', 'ArtistName', 'SongImg']

    with open(filename, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()

        for song in data:
            writer.writerow({
                'Rank': song['rank'],
                'SongName': song['song'],
                'ArtistName': song['artist'],
                'SongImg': song['img'],
            })