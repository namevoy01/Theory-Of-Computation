import requests
from bs4 import BeautifulSoup
import re

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


print(artist_song_image())