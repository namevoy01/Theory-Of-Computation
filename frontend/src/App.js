import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // ใช้ URL ที่ระบุสำหรับ API
    fetch('http://localhost:8000/api/data')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error:', error));
    main-front-end
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <h1 className="text-4xl text-white">{data}</h1>
    </div>
  );
}

export default App;