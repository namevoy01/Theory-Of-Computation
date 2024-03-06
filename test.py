from create_instance import create_instance

controller = create_instance()

# print(controller.select_zone('as', '2024 NA IN WOO Fan Meeting in Bangkok Touch my heart', '12', '12', 'A1'))
hall_seat_no = 'A-1'
hall_seat_no_splited = hall_seat_no.split('-')
print(hall_seat_no_splited)