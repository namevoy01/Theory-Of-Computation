import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // ใช้ URL ที่ระบุสำหรับ API
    fetch('http://localhost:8000/api/data')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div class="bg-white-100">
      <div class="container mx-auto p-4">
        <div class="grid grid-cols-4 gap-4">
          <div class="col-span-1 bg-white p-4 rounded-lg shadow-lg">
            <div class="flex flex-col space-y-6">
              <div>
                <div class="flex items-center space-x-2">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                  <span class="font-semibold text-lg text-gray-700">Home</span>
                </div>
              </div>
              <div>
                <div class="flex items-center space-x-2">
                  <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <input type="text"className="font-semibold border border-violet-900 text-lg text-gray-700 bg-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Search"/>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <button class="bg-violet-900 text-white  rounded-full px-4 py-2 mr-2 focus:outline-none hover:bg-violet-300 hover:text-black">Album</button>
              <button class="bg-violet-900 text-white rounded-full px-4 py-2  focus:outline-none hover:bg-violet-300 hover:text-black">Artist</button>
            </div>

            <div class="mt-6 space-y-4 overflow-y-auto max-h-80">
              <div class="flex items-center space-x-4 rounded-full w-10 h-10">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEj1SmQrJA78ga-YlqBOxRfT3NJTO2m1N3HWfO_NrtkqtdUGQv" alt="Artist" class="rounded-full" />
                <div>
                  <div class="font-bold text-gray-700">2Ecstasy</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </div>
              <div class="flex items-center space-x-4 rounded-full w-10 h-10">
                <img src="https://www.thaiticketmajor.com/variety/img_content/imgeditor/S__77496392.jpg" alt="Artist" class="rounded-full" />
                <div>
                  <div class="font-bold text-gray-700">Lipta</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </div>
              <div class="flex items-center space-x-4 rounded-full w-10 h-10">
                <img src="https://www.myband.co.th/uploads/20181230/94cab1a3d6aed152156b395b0fefd2fc.png" alt="Artist" class="rounded-full" />
                <div>
                  <div class="font-bold text-gray-700">Bowkylion</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </div>
              <div class="flex items-center inline-block space-x-4 rounded-full w-10 h-10">
                <img src="https://i.pinimg.com/originals/1b/39/5e/1b395e47be82b4d18b21fcbc3d602d2b.jpg" alt="Artist" class="rounded-full" />
                <div>
                  <div class="font-bold text-gray-700">Downuea</div>
                  <div class="text-sm text-gray-500">Artisxxxxt</div>
                </div>
              </div>
              </div>
          </div>

          <div class="col-span-3 bg-white p-4 rounded-lg shadow-lg">
            <div class="flex items-center justify-between">
              <div>
                <button class="bg-violet-900 text-white  rounded-full px-4 py-2 mr-2 focus:outline-none hover:bg-violet-300 hover:text-black">All</button>
                <button class="bg-violet-900 text-white rounded-full px-4 py-2  focus:outline-none hover:bg-violet-300 hover:text-black">TOP 50</button>
              </div>
              <div class="bg-black-100 h-8 w-16 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" alt="Artist" class="rounded-full" />
              </div>
            </div>

            <div class="mt-6">
              <div class="min-w-full bg-white">
                <div class="w-full bg-white flex items-center px-4 py-2">
                  <div class="w-1/12 text-left">No</div>
                  <div class="w-5/12 text-left">Name</div>
                  <div class="w-4/12 text-left">Album</div>
                  <div class="w-2/12 text-right">Time</div>
                </div>

                <div class="bg-violet space-y-4">
                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-lg">
                    <div class="w-1/12">1</div>
                    <div class="w-5/12 flex items-center space-x-2">
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
                    <div class="w-4/12">Rockstar</div>
                    <div class="w-2/12 text-right">2:18</div>
                  </div>

                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-lg">
                    <div class="w-1/12">2</div>
                    <div class=" w-5/12 flex items-center space-x-2">
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
                    <div class="w-4/12">ลบไม่ได้ช่วยให้ลืม</div>
                    <div class="w-2/12 text-right">3:48</div>
                  </div>

                  <div class="border-b bg-violet-100 flex justify-between items-center px-4 py-2 shadow-lg">
                    <div class="w-1/12">3</div>
                    <div class="w-5/12 flex items-center space-x-2">
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
                    <div class="w-4/12">DAY ONE</div>
                    <div class="w-2/12 text-right">4:32</div>
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
//