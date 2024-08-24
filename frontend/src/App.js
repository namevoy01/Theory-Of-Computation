import React, { useEffect, useState } from "react";

function App() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // เรียกทั้งสอง API พร้อมกัน
    Promise.all([
      fetch("http://localhost:8000/get_all_song").then((response) =>
        response.json()
      ),
      fetch("http://localhost:8000/get_all_artist").then((response) =>
        response.json()
      ),
    ])
      .then(([songsData, artistsData]) => {
        setSongs(songsData);
        setArtists(artistsData);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div class="bg-white-100">
      <div class="container mx-auto p-4">
        <div class="grid grid-cols-4 gap-4">
          <div class="col-span-1 bg-white p-4 rounded-lg shadow-lg">
            <div class="flex flex-col space-y-6">
              <div>
                
                <div class="flex items-center space-x-2">
                  <svg
                    class="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span class="font-semibold text-lg text-gray-700">Home</span>
                </div>
              </div>
              <div>
                <div class="flex items-center space-x-2">
                  <svg
                    class="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <input
                    type="text"
                    className="font-semibold border border-violet-900 text-lg text-gray-700 bg-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div class="mt-8">
              <button class="bg-violet-900 text-white  rounded-full px-4 py-2 mr-2 focus:outline-none hover:bg-violet-300 hover:text-black">
                Album
              </button>
              <button class="bg-violet-900 text-white rounded-full px-4 py-2  focus:outline-none hover:bg-violet-300 hover:text-black">
                Artist
              </button>
            </div>

            <div className="mt-6 space-y-4 overflow-y-auto max-h-[80vh]">
              {artists.map((artist) => (
                <div key={artist.artistID}>
                  <div className="font-bold text-gray-700 text-lg mb-2">
                    {artist.artistName}
                  </div>
                  {artist.artistSong.length > 0 && (
                    <button
                    key={artist.artistSong[0].id}
                      className="flex items-center space-x-4 rounded-lg p-4 border-solid border-2 border-white hover:border-gray-400 focus:outline-none w-full h-24"
                    >
                      <img
                        src={artist.artistSong[0].img}
                        alt={artist.artistSong[0].song}
                        className="rounded-lg w-20 h-20"
                      />
                      <div>
                        <div className="font-bold text-gray-700 text-lg">
                        {artist.artistSong[0].song}
                        </div>
                        <div className="text-sm text-gray-500">
                          {artist.artistName}
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>



          <div class="col-span-3 bg-white p-4 rounded-lg shadow-lg">
            <div class="border-b bg-gray-200 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl h-60">
              <img
                src="https://i.pinimg.com/originals/e7/16/55/e7165502b2a1cf61fa81b20e02bad088.gif"
                alt="New Song"
                class="rounded-lg w-full h-full object-cover"
              />
            </div>

            <div class="flex items-center justify-between mt-6">
              <div>
                <button class="bg-violet-900 text-white  rounded-full px-4 py-2 mr-2 focus:outline-none hover:bg-violet-300 hover:text-black">
                  All
                </button>
                <button class="bg-violet-900 text-white rounded-full px-4 py-2 mr-2  focus:outline-none hover:bg-violet-300 hover:text-black">
                  TOP 10
                </button>
                <button class="bg-violet-900 text-white rounded-full px-4 py-2 mr-2  focus:outline-none hover:bg-violet-300 hover:text-black">
                  TOP 30
                </button>
                <button class="bg-violet-900 text-white rounded-full px-4 py-2 mr-2  focus:outline-none hover:bg-violet-300 hover:text-black">
                  TOP 50
                </button>
                <button class="bg-violet-900 text-white rounded-full px-4 py-2 mr-2  focus:outline-none hover:bg-violet-300 hover:text-black">
                  TOP 100
                </button>
              </div>
              {/* <div class="bg-black-100 h-8 w-16 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg"
                  alt="Artist"
                  class="rounded-full"
                />
              </div> */} 
            </div>

            <div class="mt-6">

              <div class="min-w-full bg-white">

                <div class="w-full bg-white flex items-center px-4 py-2">
                  <div class="w-1/12 text-left font-bold">#</div>
                  <div class="w-5/12 text-left font-bold">Name</div>
                  <div class="w-4/12 text-left font-bold">Album</div>
                  <div class="w-2/12 text-right font-bold">Time</div>
                </div>

                <div class="bg-violet space-y-4 overflow-y-auto max-h-[400px]">
                {songs.map((song, index) => (
                  <div key={index} class="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl ">
                    <div class="w-1/12">{index + 1}</div>
                    <div class="w-5/12 flex items-center space-x-2">
                      <img
                        src={song.img}
                        alt={song.song}
                        class="rounded-lg w-20 h-20"
                      />
                      <div>
                        <div class="font-bold text-gray-700">{song.song}</div>
                        <div class="text-sm text-gray-500">{song.artist}</div>
                      </div>
                    </div>
                    <div class="w-4/12">{song.song}</div>
                    <div class="w-2/12 text-right">{song.rank}</div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
