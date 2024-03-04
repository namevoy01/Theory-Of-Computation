from thaiticket import WebController, Account, Hall, HallSeat

def create_instance():
    Hall_1 = Hall('JJ HALL ชั้น 6 ศูนย์การค้าเจเจมอลล์')
    Hall_2 = Hall('Exhibition Hall 3-4, ศูนย์ประชุมแห่งชาติสิริกิติ์')
    Hall_3 = Hall('oo')
    Hall_4 = Hall('ABCDEFG')
    listrow = 'ABC'
    listcol = [1,20]

    for row in listrow:
        for col in range(listcol[0], listcol[1]+1):
            Hall_1.add_hall_seat(HallSeat(row + '-' + str(col)))

    for seat in Hall_1.hall_seat_list:
        print(seat.seat_no)
create_instance()
