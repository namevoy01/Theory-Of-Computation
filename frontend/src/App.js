import React, { useEffect, useState } from "react";

function App() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedArtistSongs, setSelectedArtistSongs] = useState([]);

  useEffect(() => {
    // Fetch both APIs initially
    Promise.all([
      fetch("http://localhost:8000/get_all_song").then((response) =>
        response.json()
      ),
      fetch("http://localhost:8000/get_all_artist").then((response) =>
        response.json()
      ),
    ])
      .then(([songsData, artistsData]) => {
        setSongs(Array.isArray(songsData) ? songsData : []);
        setArtists(Array.isArray(artistsData) ? artistsData : []);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // Function to handle search
  const handleSearch = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);

    if (keyword.trim()) {
      fetch(`http://localhost:8000/search_songs?keyword=${keyword}`)
        .then((response) => response.json())
        .then((data) => setSearchResults(Array.isArray(data) ? data : []))
        .catch((error) => console.error("Error:", error));
    } else {
      setSearchResults([]);
    }
  };

  // Function to handle artist click
  const handleArtistClick = (artistName) => {
    if (!searchKeyword.trim()) { // Only allow click if not searching
      fetch(`http://localhost:8000/get_artist/${encodeURIComponent(artistName)}`)
        .then((response) => response.json())
        .then((data) => {
          const artistSongs = Array.isArray(data.artistSong) ? data.artistSong : [];
          setSelectedArtistSongs(
            artistSongs.map(song => ({ ...song, artist: artistName })) // Add artist name to each song
          );
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  // Function to handle CSV download
  const handleCsvDownload = () => {
    window.location.href = "http://127.0.0.1:8000/export_to_csv";
  };

  return (
    <div className="bg-white-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <button
                  className="font-semibold text-lg text-gray-700"
                  onClick={() => window.location.reload()}
                >
                  Home
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  className="font-semibold border border-violet-900 text-lg text-gray-700 bg-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search"
                  value={searchKeyword}
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="text-black font-bold text-xl rounded-full px-4 py-2">
                Artist
              </div>
              <button
                className="bg-violet-900 text-white rounded-full px-4 py-2 focus:outline-none hover:bg-violet-300 hover:text-black"
                onClick={handleCsvDownload}
              >
                CSV
              </button>
            </div>

            <div className="mt-6 space-y-4 overflow-y-auto max-h-[90vh]">
              {artists.map((artist) => (
                <div key={artist.artistID}>
                  {artist.artistSong.length > 0 && (
                    <button
                      onClick={() => handleArtistClick(artist.artistName)}
                      disabled={searchKeyword.trim() !== ""} // Disable button when searching
                      className={`flex items-center space-x-4 rounded-lg p-4 border-solid border-2 border-white ${
                        searchKeyword.trim() !== "" ? 'cursor-not-allowed opacity-50' : 'hover:border-gray-400'
                      } focus:outline-none w-full h-24`}
                    >
                      <img
                        src={artist.artistImg}
                        alt={artist.artistName}
                        className="rounded-lg w-20 h-20"
                      />
                      <div>
                        <div className="font-bold text-gray-700 text-base">
                          {artist.artistName}
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-3 bg-white p-4 rounded-lg shadow-lg">
            <div className="border-b bg-gray-200 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl h-60">
              <img
                src="https://i.pinimg.com/originals/e7/16/55/e7165502b2a1cf61fa81b20e02bad088.gif"
                alt="New Song"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>

            <div className="mt-6">
              <div className="min-w-full bg-white">
                <div className="w-full bg-white flex items-center px-4 py-2">
                  <div className="w-1/12 text-left font-bold">#</div>
                  <div className="w-5/12 text-left font-bold">Name</div>
                  <div className="w-4/12 text-left font-bold">Artist</div>
                  <div className="w-2/12 text-right font-bold">Rank</div>
                </div>

                <div className="bg-violet space-y-4 overflow-y-auto max-h-[600px]">
                  {(searchResults.length > 0 ? searchResults : selectedArtistSongs.length > 0 ? selectedArtistSongs : songs).map(
                    (song, index) => (
                      <div
                        key={index}
                        className="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl"
                      >
                        <div className="w-1/12">{index + 1}</div>
                        <div className="w-5/12 flex items-center space-x-2">
                          <img
                            src={song.img}
                            alt={song.song}
                            className="rounded-lg w-20 h-20"
                          />
                          <div>
                            <div className="font-bold text-gray-700">
                              {song.song}
                            </div>
                            <div className="text-sm text-gray-500">
                              
                            </div>
                          </div>
                        </div>
                        <div className="w-4/12">{song.artist}</div>
                        <div className="w-2/12 text-right">{song.rank}</div>
                      </div>
                    )
                  )}
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
