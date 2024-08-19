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
                  </svg>
                  <span class="font-semibold text-lg text-gray-700">Home</span>
                </div>
              </div>
              <div>
                <div class="flex items-center space-x-2">
                  <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  </svg>
                  <input type="text"className="font-semibold border border-violet-500 text-lg text-gray-700 bg-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Search"/>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <button class="bg-violet-800 text-white border border-black rounded-full px-4 py-2 mr-2 focus:outline-none">Album</button>
              <button class="bg-violet-800 text-white rounded-full px-4 py-2 border border-black focus:outline-none">Artist</button>
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
                <img src="https://cms.dmpcdn.com/musicarticle/2023/10/26/301e0890-73ba-11ee-8629-5510508fd0ae_webp_original.webp" alt="Artist" class="rounded-full" />
                <div>
                  <div class="font-bold text-gray-700">BOWKYLION</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-4 rounded-full w-10 h-10">
                <img src="https://www.thaiticketmajor.com/variety/img_content/imgeditor/S__77496392.jpg" alt="Artist" class="rounded-full" />
                <div>
                  <div class="font-bold text-gray-700">Lipta</div>
                  <div class="text-sm text-gray-500">Artist</div>
                </div>
              </div>

          </div>

          <div class="col-span-3 bg-white p-4 rounded-lg shadow-lg">
            <div class="flex items-center justify-between">
              <div>
                <button class="bg-violet-800 text-white border border-black rounded-full px-4 py-2 mr-2 focus:outline-none">All</button>
                <button class="bg-violet-800 text-white rounded-full px-4 py-2 border border-black focus:outline-none">TOP 50</button>
              </div>
              <div class="bg-black-100 h-8 w-16 flex items-center justify-center">
                <img src="https://i.pinimg.com/originals/93/46/53/934653214719cf630e0f5cf9c746b364.png" alt="Artist" class="rounded-full" />
              </div>
            </div>

            <div class="mt-6">

              <table class="min-w-full bg-white">
                <thead>
                  <tr class="w-full bg-white">
                    <th class="py-2 text-left pl-4">No</th>
                    <th class="py-2 text-left">Name</th>
                    <th class="py-2 text-left">Album</th>
                    <th class="py-2 text-right pr-4">Time</th>
                  </tr>
                </thead>
                <tbody class="bg-violet space-y-4 shadow-lg">

                  <tr class="border-b bg-violet-100" >
                    <td class="py-2 pl-4">1</td>
                    <td class="py-2 flex items-center space-x-2">
                      <img src="https://f.ptcdn.info/615/084/000/lxtkc0zaiBPvh1mi77z-o.jpg" alt="Rockstar" class="rounded-full w-10 h-10" />
                      <div>
                        <div class="font-bold text-gray-700">Rockstar</div>
                        <div class="text-sm text-gray-500">LISA</div>
                      </div>
                    </td>
                    <td class="py-2">Rockstar</td>
                    <td class="py-2 text-right pr-4">2:18</td>
                  </tr>
                  <tr class="border-b bg-violet-100">
                    <td class="py-2 pl-4">2</td>
                    <td class="py-2 flex items-center space-x-2">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiP2OKii3peB3FGvp2liul841wFN8DbJuxYQ&s" alt="THE VOYS" class="rounded-full w-10 h-10" />
                      <div>
                        <div class="font-bold text-gray-700">ลบไม่ได้ช่วยให้ลืม</div>
                        <div class="text-sm text-gray-500">INK WARUNTORN</div>
                      </div>
                    </td>
                    <td class="py-2">ลบไม่ได้ช่วยให้ลืม</td>
                    <td class="py-2 text-right pr-4">3:48</td>
                  </tr>
                  <tr class="border-b bg-violet-100">
                    <td class="py-2 pl-4">3</td>
                    <td class="py-2 flex items-center space-x-2">
                      <img src="https://siamdara.com/cms/uploads/music/IMG-66627644050e00.75763144.jpg" alt="DAY ONE" class="rounded-full w-10 h-10" />
                      <div>
                        <div class="font-bold text-gray-700">DAY ONE</div>
                        <div class="text-sm text-gray-500">PUNYARB</div>
                      </div>
                    </td>
                    <td class="py-2">DAY ONE</td>
                    <td class="py-2 text-right pr-4">4:32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;