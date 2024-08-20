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

            <div class="mt-6 space-y-4 overflow-y-auto max-h-[50vh]">
              <button class="flex items-center space-x-4 rounded-lg p-4 border-solid border-2 border-white hover:border-gray-400 focus:outline-none w-full h-24">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEj1SmQrJA78ga-YlqBOxRfT3NJTO2m1N3HWfO_NrtkqtdUGQv"
                  alt="Artist"
                  class="rounded-lg w-20 h-20"
                />
                <div>
                  <div class="font-bold text-gray-700 text-lg">2Ecstasy</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </button>

              <button class="flex items-center space-x-4 rounded-lg p-4 border-solid border-2 border-white hover:border-gray-400 focus:outline-none w-full h-24">
                <img
                  src="https://www.thaiticketmajor.com/variety/img_content/imgeditor/S__77496392.jpg"
                  alt="Artist"
                  class="rounded-lg w-20 h-20"
                />
                <div>
                  <div class="font-bold text-gray-700 text-lg">Lipta</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </button>

              <button class="flex items-center space-x-4 rounded-lg p-4 border-solid border-2 border-white hover:border-gray-400 focus:outline-none w-full h-24">
                <img
                  src="https://www.myband.co.th/uploads/20181230/94cab1a3d6aed152156b395b0fefd2fc.png"
                  alt="Artist"
                  class="rounded-lg w-20 h-20"
                />
                <div>
                  <div class="font-bold text-gray-700 text-lg">Bowkylion</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </button>

              <button class="flex items-center space-x-4 rounded-lg p-4 border-solid border-2 border-white hover:border-gray-400 focus:outline-none w-full h-24">
                <img
                  src="https://i.pinimg.com/originals/1b/39/5e/1b395e47be82b4d18b21fcbc3d602d2b.jpg"
                  alt="Artist"
                  class="rounded-lg w-20 h-20"
                />
                <div>
                  <div class="font-bold text-gray-700 text-lg">Downuea</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </button>

              <button class="flex items-center space-x-4 rounded-lg p-4 border-solid border-2 border-white hover:border-gray-400 focus:outline-none w-full h-24">
                <img
                  src="https://i.pinimg.com/originals/4f/fb/69/4ffb698cf4fbb010d692f6e8c14c3f2d.jpg"
                  alt="Artist"
                  class="rounded-lg w-20 h-20 "
                />
                <div>
                  <div class="font-bold text-gray-700 text-lg">XXXX</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </button>

              <button class="flex items-center space-x-4 rounded-lg p-4 border-solid border-2 border-white hover:border-gray-400 focus:outline-none w-full h-24">
                <img
                  src="https://i.pinimg.com/originals/5c/5d/a2/5c5da29b48e58e203b3511a1053f443e.jpg"
                  alt="Artist"
                  class="rounded-lg w-20 h-20"
                />
                <div>
                  <div class="font-bold text-gray-700 text-lg">YYYY</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </button>

            </div>

          </div>



          <div class="col-span-3 bg-white p-4 rounded-lg shadow-lg">
            <div class="border-b bg-gray-200 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl h-40">
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
                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl ">
                    <div class="w-1/12">1</div>
                    <div class="w-5/12 flex items-center space-x-2">
                      <img
                        src="https://f.ptcdn.info/615/084/000/lxtkc0zaiBPvh1mi77z-o.jpg"
                        alt="Rockstar"
                        class="rounded-lg w-20 h-20"
                      />
                      <div>
                        <div class="font-bold text-gray-700">Rockstar</div>
                        <div class="text-sm text-gray-500">LISA</div>
                      </div>
                    </div>
                    <div class="w-4/12">Rockstar</div>
                    <div class="w-2/12 text-right">2:18</div>
                  </div>

                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl">
                    <div class="w-1/12">2</div>
                    <div class=" w-5/12 flex items-center space-x-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiP2OKii3peB3FGvp2liul841wFN8DbJuxYQ&s"
                        alt="THE VOYS"
                        class="rounded-lg w-20 h-20"
                      />
                      <div>
                        <div class="font-bold text-gray-700">ลบไม่ได้ช่วยให้ลืม</div>
                        <div class="text-sm text-gray-500">INK WARUNTORN</div>
                      </div>
                    </div>
                    <div class="w-4/12">ลบไม่ได้ช่วยให้ลืม</div>
                    <div class="w-2/12 text-right">3:48</div>
                  </div>

                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl">
                    <div class="w-1/12">3</div>
                    <div class="w-5/12 flex items-center space-x-2">
                      <img
                        src="https://siamdara.com/cms/uploads/music/IMG-66627644050e00.75763144.jpg"
                        alt="DAY ONE"
                        class="rounded-lg w-20 h-20"
                      />
                      <div>
                        <div class="font-bold text-gray-700">DAY ONE</div>
                        <div class="text-sm text-gray-500">PUNYARB</div>
                      </div>
                    </div>
                    <div class="w-4/12">DAY ONE</div>
                    <div class="w-2/12 text-right">4:32</div>
                  </div>

                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl">
                    <div class="w-1/12">4</div>
                    <div class="w-5/12 flex items-center space-x-2">
                      <img
                        src="https://i.pinimg.com/originals/1b/39/5e/1b395e47be82b4d18b21fcbc3d602d2b.jpg"
                        alt="New Song"
                        class="rounded-lg w-20 h-20"
                      />
                      <div>
                        <div class="font-bold text-gray-700">มักสาวคนมีเจ้าของ</div>
                        <div class="text-sm text-gray-500">Downuea</div>
                      </div>
                    </div>
                    <div class="w-4/12">X1</div>
                    <div class="w-2/12 text-right">3:12</div>
                  </div>
                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-xl rounded-xl">
                    <div class="w-1/12">4</div>
                    <div class="w-5/12 flex items-center space-x-2">
                      <img
                        src="https://i.pinimg.com/564x/e9/a3/47/e9a34783d9e719ce508e6bb573d6a12c.jpg"
                        alt="New Song"
                        class="rounded-lg w-20 h-20"
                      />
                      <div>
                        <div class="font-bold text-gray-700">เหนืออยากมีเมียน้อย</div>
                        <div class="text-sm text-gray-500">Downuea</div>
                      </div>
                    </div>
                    <div class="w-4/12">Downueady</div>
                    <div class="w-2/12 text-right">3:22</div>
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
