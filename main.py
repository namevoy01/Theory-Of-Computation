from typing import Union

from fastapi import FastAPI

from create_instance import create_instance

controller = create_instance()

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    item = controller.search(item_id)
    return {"item_id": item}