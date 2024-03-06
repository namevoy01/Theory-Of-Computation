from typing import Union

from fastapi import FastAPI

from create_instance import create_instance

controller = create_instance()

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/select-event")
def select_event(event_name : str):
    data = controller.select_event(event_name)
    return data

@app.post("/select-show")
def select_show(event_name : str, show_date:str, show_time:str):
    data = controller.select_show(event_name, show_date, show_time)
    return data

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    item = controller.search(item_id)
    return {"item_id": item}