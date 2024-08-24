import requests
from bs4 import BeautifulSoup
import re

########## SCAP WEB ########## 

r = requests.get('https://www.billboard.com/charts/billboard-200/')
soup = BeautifulSoup(r.content, 'html.parser')

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


def artist_song_image():
    x = []
    for i in range(len(h3_list)):
        x.append({'Artist' : span_list[i].string.strip(),
                'Song' : h3_list[i].string.strip(),
                'Image' : img_to_append[i]})

    return x

########## MANAGE DATA ##########

def All_Songs():
    data = artist_song_image()
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

def All_Artist():
    allSong = All_Songs()
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

def search_songs_by_artist(artist_name):
    allSong = All_Songs()

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

def search_songs_by_keyword(keyword):
    data = All_Songs()
    search_results = []

    for song_info in data:
        if keyword.lower() in song_info['artist'].lower() or keyword.lower() in song_info['song'].lower():
            search_results.append(song_info)

    if not search_results:
        return "Not Found"
    
    return search_results

# print(All_Songs())
# print(All_Artist())
# print(search_songs_by_artist("Taylor Swift"))
# print(search_songs_by_keyword('billie'))