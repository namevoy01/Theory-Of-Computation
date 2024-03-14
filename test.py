from create_instance import create_instance
import time


controller = create_instance()

#seat_selected = "AA-1,AA-2,AA-3"

# named_tuple = time.localtime() # get struct_time
# time_string = time.strftime("%d-%m-%Y, %H:%M:%S", time.localtime())

# print(time_string)
dummy = {
  "account_id": "12345",
  "event_name": "2024 NA IN WOO Fan Meeting in Bangkok Touch my heart",
  "show_date": "23-03-2567",
  "show_time": "18:00-PM",
  "zone_name": "A1",
  "seat_selected": "AA-1,AA-2"
}

print(controller.select_seat(dummy["account_id"], dummy["event_name"], dummy["show_date"], dummy["show_time"], dummy["zone_name"], dummy["seat_selected"]))