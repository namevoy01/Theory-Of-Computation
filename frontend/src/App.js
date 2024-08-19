import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    // ใช้ URL ที่ระบุสำหรับ API
    fetch("http://localhost:8000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data.data))
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
                  ></svg>
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
                  ></svg>
                  <input
                    type="text"
                    class="font-semibold border border-violet-500 text-lg text-gray-700 bg-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div class="mt-8">
              <button class="bg-violet-800 text-white border border-black rounded-full px-4 py-2 mr-2 focus:outline-none">
                Album
              </button>
              <button class="bg-violet-800 text-white rounded-full px-4 py-2 border border-black focus:outline-none">
                Artist
              </button>
            </div>

            <div class="mt-6 space-y-4 overflow-y-auto max-h-80">
              <div class="flex items-center space-x-4">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEj1SmQrJA78ga-YlqBOxRfT3NJTO2m1N3HWfO_NrtkqtdUGQv"
                  alt="Artist"
                  class="rounded-full w-10 h-10"
                />
                <div>
                  <div class="font-bold text-gray-700">2Ecstasy</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <img
                  src="https://www.thaiticketmajor.com/variety/img_content/imgeditor/S__77496392.jpg"
                  alt="Artist"
                  class="rounded-full w-10 h-10"
                />
                <div>
                  <div class="font-bold text-gray-700">Lipta</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <img
                  src="https://www.myband.co.th/uploads/20181230/94cab1a3d6aed152156b395b0fefd2fc.png"
                  alt="Artist"
                  class="rounded-full w-10 h-10"
                />
                <div>
                  <div class="font-bold text-gray-700">BOWKYLION</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <img
                  src="https://i.pinimg.com/originals/93/46/53/934653214719cf630e0f5cf9c746b364.png"
                  alt="Artist"
                  class="rounded-full w-10 h-10"
                />
                <div>
                  <div class="font-bold text-gray-700">A-LIST</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-3 bg-white p-4 rounded-lg shadow-lg">
            <div class="flex items-center justify-between">
              <div>
                <button class="bg-violet-800 text-white border border-black rounded-full px-4 py-2 mr-2 focus:outline-none">
                  All
                </button>
                <button class="bg-violet-800 text-white rounded-full px-4 py-2 border border-black focus:outline-none">
                  TOP 50
                </button>
              </div>
              <div class="bg-black-100 h-8 w-16 flex items-center justify-center">
                <img
                  src="https://i.pinimg.com/originals/93/46/53/934653214719cf630e0f5cf9c746b364.png"
                  alt="Artist"
                  class="rounded-full"
                />
              </div>
            </div>

            <div class="mt-6">
              <div class="min-w-full bg-white">
                <div class="w-full bg-white flex justify-between px-4 py-2">
                  <div class="text-left">No</div>
                  <div class="text-left">Name</div>
                  <div class="text-left">Album</div>
                  <div class="text-right">Time</div>
                </div>

                <div class="bg-violet space-y-4 shadow-lg">
                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2">
                    <div>1</div>
                    <div class="flex items-center space-x-2">
                      <img
                        src="https://f.ptcdn.info/615/084/000/lxtkc0zaiBPvh1mi77z-o.jpg"
                        alt="Rockstar"
                        class="rounded-full w-10 h-10"
                      />
                      <div>
                        <div class="font-bold text-gray-700">Rockstar</div>
                        <div class="text-sm text-gray-500">LISA</div>
                      </div>
                    </div>
                    <div>Rockstar</div>
                    <div class="text-right">2:18</div>
                  </div>

                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2">
                    <div>2</div>
                    <div class="flex items-center space-x-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiP2OKii3peB3FGvp2liul841wFN8DbJuxYQ&s"
                        alt="THE VOYS"
                        class="rounded-full w-10 h-10"
                      />
                      <div>
                        <div class="font-bold text-gray-700">
                          ลบไม่ได้ช่วยให้ลืม
                        </div>
                        <div class="text-sm text-gray-500">INK WARUNTORN</div>
                      </div>
                    </div>
                    <div>ลบไม่ได้ช่วยให้ลืม</div>
                    <div class="text-right">3:48</div>
                  </div>

                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2">
                    <div>3</div>
                    <div class="flex items-center space-x-2">
                      <img
                        src="https://siamdara.com/cms/uploads/music/IMG-66627644050e00.75763144.jpg"
                        alt="DAY ONE"
                        class="rounded-full w-10 h-10"
                      />
                      <div>
                        <div class="font-bold text-gray-700">DAY ONE</div>
                        <div class="text-sm text-gray-500">PUNYARB</div>
                      </div>
                    </div>
                    <div>DAY ONE</div>
                    <div class="text-right">4:32</div>
                  </div>
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
