ต้องรันทั้ง front-end และ back-end พร้อมกัน

---------------------------------------------------------------------------
1) ติดตั้งครั้งแรก วิธี RUN back-end
1. เข้า C:\Users\Path\Documents\GitHub\python-OOP-Project
2. python -m venv myenv
3. myenv\Scripts\activate
4. เข้า C:\Users\Path\Documents\GitHub\python-OOP-Project\fastapi-backend
5. pip install fastapi uvicorn
6. uvicorn main:app --reload


2) มี Project อยู่แล้ว
1. เข้า C:\Users\Path\Documents\GitHub\python-OOP-Project
2. myenv\Scripts\activate
3. เข้า C:\Users\Path\Documents\GitHub\python-OOP-Project\fastapi-backend
4. uvicorn main:app --reload

---------------------------------------------------------------------------

1) ติดตั้งครั้งแรก วิธี RUN front-end
1. เข้า C:\Users\Path\Documents\GitHub\python-OOP-Project\react-frontend
2. npm install
3. C:\Users\Path\Documents\GitHub\python-OOP-Project\react-frontend
4. npm start

2) มี Project อยู่แล้ว
1. เข้า C:\Users\Path\Documents\GitHub\python-OOP-Project\react-frontend
2. C:\Users\Path\Documents\GitHub\python-OOP-Project\react-frontend
3. npm start