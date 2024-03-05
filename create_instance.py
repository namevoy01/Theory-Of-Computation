from thaiticket import WebController, Account, Hall, HallSeat, Zone, Event

def create_instance():
    Event_1 = Event('2024 NA IN WOO Fan Meeting in Bangkok''Touch my heart''')
    Event_2 = Event()
    Event_3 = Event()

    Hall_1 = Hall('JJ HALL ชั้น 6 ศูนย์การค้าเจเจมอลล์')
    Hall_2 = Hall('Exhibition Hall 3-4, ศูนย์ประชุมแห่งชาติสิริกิติ์')
    Hall_3 = Hall('oo')

    Hall_1_zone_A1 = Zone('A1','6500','ABC',[1,16])
    Hall_1_zone_A2 = Zone('A2','6500','ABC',[1,16])
    Hall_1_zone_A3 = Zone('A3','6500','ABC',[1,16])
    Hall_1_zone_B1 = Zone('B1','5500','ABCDEF',[1,16])
    Hall_1_zone_B2 = Zone('B2','5500','ABCDEF',[1,16])
    Hall_1_zone_B3 = Zone('B3','5500','ABCDEF',[1,16])
    Hall_1_zone_C1 = Zone('C1','4500','AB',[1,16])
    Hall_1_zone_C2 = Zone('C2','4500','AB',[1,16])
    Hall_1_zone_C3 = Zone('C3','4500','AB',[1,16])
    Hall_1_zone_D1 = Zone('D1','3500','A',[1,16])
    Hall_1_zone_D2 = Zone('D2','3500','A',[1,16])
    Hall_1_zone_D3 = Zone('D3','3500','A',[1,16])
    
    listrow = 'ABC'
    listcol = [1,20]

    for row in listrow:
        for col in range(listcol[0], listcol[1]+1):
            Hall_1.add_hall_seat(HallSeat(row + '-' + str(col)))

    for seat in Hall_1.hall_seat_list:
        print(seat.seat_no)
create_instance()
