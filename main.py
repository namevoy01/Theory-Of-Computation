from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from create_instance import create_instance

controller = create_instance()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173/', 'http://localhost:3000'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/select-event")
def select_event(event_name : str):
    data = controller.select_event(event_name)
    return data

@app.get("/select-show")
def select_show(event_name : str, show_date:str, show_time:str):
    data = controller.select_show(event_name, show_date, show_time)
    return data

@app.get("/select-zone")
def select_zone(account_id:str, event_name:str, show_date:str, show_time:str, zone_name:str):
    data = controller.select_zone(account_id, event_name, show_date, show_time, zone_name)
    return data

@app.get("/select-seat")
def select_seat(account_id:str, event_name:str, show_date:str, show_time:str, zone_name:str, seat_selected:str):
    controller.select_seat(account_id, event_name, show_date, show_time, zone_name, seat_selected)
    return {'status' : 'success'}

