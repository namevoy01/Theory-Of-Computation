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

@app.get("/login")
def login(username:str, password:str):
    username, password = username.strip(), password.strip()
    data = controller.login(username, password)
    return data

@app.get("/select-event")
def select_event(event_name : str):
    event_name = event_name.strip()
    data = controller.select_event(event_name)
    return data

@app.get("/select-show")
def select_show(event_name : str, show_date:str, show_time:str):
    event_name, show_date, show_time = event_name.strip(), show_date.strip(), show_time.strip()
    data = controller.select_show(event_name, show_date, show_time)
    return data

@app.get("/select-zone")
def select_zone(account_id:str, event_name:str, show_date:str, show_time:str, zone_name:str):
    account_id, event_name, show_date, show_time, zone_name = account_id.strip(), event_name.strip(), show_date.strip(), show_time.strip(), zone_name.strip()
    data = controller.select_zone(account_id, event_name, show_date, show_time, zone_name)
    return data

@app.get("/select-seat")
def select_seat(account_id:str, event_name:str, show_date:str, show_time:str, zone_name:str, seat_selected:str):
    account_id, event_name, show_date, show_time, zone_name, seat_selected = account_id.strip(), event_name.strip(), show_date.strip(), show_time.strip(), zone_name.strip(), seat_selected.strip()
    data = controller.select_seat(account_id, event_name, show_date, show_time, zone_name, seat_selected)
    return data

@app.post("/confirm-payment")
def confirm_payment(reservation_no:int, total_pice:str, receive_method:str):
    reservation_no, total_pice, receive_method = reservation_no, total_pice.strip(), receive_method.strip()
    data = controller.confirm_payment(reservation_no, total_pice, receive_method)
    return data

@app.get('/view-reservation')
def view_reservation(account_name:str):
    account_name = account_name.strip()
    data = controller.view_reservation(account_name)
    return data

@app.get('/view-ticket')
def view_ticket(account_name:str):
    account_name = account_name.strip()
    data = controller.view_ticket(account_name)
    return data

@app.post('/cancel-reservation')
def cancel_reservation(reservation_no:int):
    data = controller.cancel_reservation(reservation_no)
    return data


