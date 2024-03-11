from create_instance import create_instance

controller = create_instance()

# print(controller.select_zone('as', '2024 NA IN WOO Fan Meeting in Bangkok Touch my heart', '12', '12', 'A1'))
seat_selected = "AA-1,AA-2,AA-3"

seat_split = seat_selected.split(',')
print(seat_split)