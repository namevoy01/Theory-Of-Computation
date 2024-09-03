import React, { useEffect, useState } from "react";

const imageUrls = [
  "https://i.gifer.com/Sr86.gif",
  "https://i.gifer.com/Erie.gif",
  "https://i.gifer.com/g10h.gif",
  // เพิ่ม URL ของรูปภาพเพิ่มเติมที่นี่
];

function App() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedArtistSongs, setSelectedArtistSongs] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown

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

    // Start image slideshow
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageUrls.length);
    }, 1000); // เปลี่ยนภาพทุก 1 วินาที

    // Clean up interval on component unmount
    return () => clearInterval(interval);
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

  const handleArtistClick = (artistName) => {
    if (!searchKeyword.trim()) {
      // Only allow click if not searching
      const formattedArtistName = artistName.replace(/\//g, "-");
      fetch(
        `http://localhost:8000/get_artist/${encodeURIComponent(
          formattedArtistName
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          const artistSongs = Array.isArray(data.artistSong)
            ? data.artistSong
            : [];
          setSelectedArtistSongs(
            artistSongs.map((song) => ({ ...song, artist: artistName })) // Add artist name to each song
          );
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  // Function to handle CSV download
  const handleCsvDownload = () => {
    window.location.href = "http://127.0.0.1:8000/export_to_csv";
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-white p-4 flex flex-col overflow-hidden">
        {/* Sidebar for Home and Search */}
        <div className="flex flex-col space-y-6 mb-8 overflow-hidden">
          <div className="bg-gray-200 p-4 rounded-lg ml-2 -mt-1 h-40 overflow-auto">
            {/* Home Button */}
            <div className="flex items-center space-x-2 mb-6">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
                />
                <path
                  d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
                ></path>
              </svg>
              <button
                className="font-semibold text-lg text-black"
                onClick={() => window.location.reload()}
              >
                Home
              </button>
            </div>

            {/* Search Input */}
            <div className="flex items-center space-x-2 mb-6">
              <svg
                className="w-6 h-6 text-black"
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
                className="font-semibold border border-gray-700 text-lg text-gray-700 bg-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
                value={searchKeyword}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>

        {/* Sidebar for Artist */}
        <div className=" flex-1 bg-gray-200 p-4 rounded-lg ml-2 -mt-3 lg:overflow-y-auto max-h-[calc(100vh-200px)] overflow-y-auto sticky top-0 bg-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-black font-bold text-xl">Artist</div>
            <button
              className="bg-gray-900 text-white rounded-lg p-2 focus:outline-none hover:bg-violet-300 hover:text-black"
              onClick={handleCsvDownload}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
          {/* Dropdown Toggle Button for Small Screens */}
          <div className="lg:hidden sticky top-0 z-10 bg-gray-200">
            <button
              className="w-full bg-gray-700 text-white p-2 rounded-lg mb-2"
              onClick={toggleDropdown}
            >
              {isDropdownOpen ? "Hide Artists" : "Show Artists"}
            </button>
          </div>
          {/* Artist Cards with scrollable container */}
          <div
            className={`flex-1 overflow-y-auto ${isDropdownOpen || !window.matchMedia("(max-width: 1024px)").matches
                ? "block"
                : "hidden"
              } lg:block`}
          >
            {artists.map((artist) => (
              <div key={artist.artistID}>
                {artist.artistSong.length > 0 && (
                  <button
                    onClick={() => handleArtistClick(artist.artistName)}
                    disabled={searchKeyword.trim() !== ""} // Disable button when searching
                    className={`flex items-center space-x-4 rounded-lg p-4 border-solid border-2 border-gray ${searchKeyword.trim() !== ""
                        ? "cursor-not-allowed opacity-50"
                        : "hover:border-gray-400"
                      } focus:outline-none w-full h-24`}
                  >
                    <img
                      src={artist.artistImg}
                      alt={artist.artistName}
                      className="rounded-lg w-20 h-20"
                    />
                    <div>
                      <div className="font-bold text-gray-700 text-base text-left">
                        {artist.artistName}
                      </div>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Song List with Slideshow */}
      <div className="flex-1 bg-white p-4 lg:p-8 overflow-y-auto">
        {/* Slideshow */}
        <div className="relative mb-4 lg:mb-8 -ml-6 -mt-5 -mr-2">
          <img
            src={imageUrls[currentImage]}
            alt="Slideshow"
            className="w-full h-48 lg:h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="min-w-full bg-gray-200 p-4 rounded-lg shadow-md -ml-6 -mt-5 -mr-2">
          <div className="w-full  flex flex-col lg:flex-row px-4 py-2">
            <div className="w-full lg:w-1/12 text-left font-bold">#</div>
            <div className="w-full lg:w-5/12 text-left font-bold">Name</div>
            <div className="w-full lg:w-4/12 text-left font-bold">Artist</div>
            <div className="w-full lg:w-2/12 text-right font-bold">Rank</div>
          </div>
          <div className="space-y-4">
            {(searchResults.length > 0 ? searchResults : selectedArtistSongs.length > 0 ? selectedArtistSongs : songs).map(
              (song, index) => (
                <div
                  key={index}
                  className="border-b bg-violet-100 flex flex-col lg:flex-row justify-between items-center px-4 py-2 shadow-xl rounded-xl"
                >
                  <div className="w-full lg:w-1/12 text-left">{index + 1}</div>
                  <div className="w-full lg:w-5/12 flex items-center space-x-2">
                    <img
                      src={song.img}
                      alt={song.song}
                      className="rounded-lg w-16 h-16 lg:w-20 lg:h-20"
                    />
                    <div>
                      <div className="font-bold text-gray-700">
                        {song.song}
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 text-left">{song.artist}</div>
                  <div className="w-full lg:w-2/12 text-right">{song.rank}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
