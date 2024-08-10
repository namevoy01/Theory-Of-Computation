ต้องรันทั้ง front-end และ back-end พร้อมกัน
เปิด CMD และทำตามวิธีด้านล่าง
---------------------------------------------------------------------------
back-end

1) ติดตั้งครั้งแรก วิธี RUN back-end
1. เข้า C:\Users\Path\Documents\GitHub\Theory-Of-Computation
2. python -m venv myenv
3. myenv\Scripts\activate
4. เข้า C:\Users\Path\Documents\GitHub\Theory-Of-Computation\fastapi-backend
5. pip install fastapi uvicorn
6. uvicorn main:app --reload


2) มี Project อยู่แล้ว
1. เข้า C:\Users\Path\Documents\GitHub\Theory-Of-Computation
2. myenv\Scripts\activate
3. เข้า C:\Users\Path\Documents\GitHub\Theory-Of-Computation\fastapi-backend
4. uvicorn main:app --reload

---------------------------------------------------------------------------
front-end

1) ติดตั้งครั้งแรก วิธี RUN front-end
1. เข้า C:\Users\Path\Documents\GitHub\Theory-Of-Computation\frontend
2. npm install
3. C:\Users\Path\Documents\GitHub\Theory-Of-Computation\frontend
4. npm start

2) มี Project อยู่แล้ว
1. เข้า C:\Users\Path\Documents\GitHub\Theory-Of-Computation\frontend
2. C:\Users\Path\Documents\GitHub\Theory-Of-Computation\frontend
3. npm start