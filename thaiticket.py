class WebController:
    def __init__(self):
        self.__event_list = []
        self.__show_seat_list = []
        self.__account_list = []
        self.__reservation_list = []
        self.__payment_list = []

    def add_event(self, event):
        self.__event_list.append(event)

    def add_show_seat(self, show_seat):
        self.__show_seat_list.append(show_seat)

    def add_account(self, account):
        self.__account_list.append(account)

    def select_event(self, account, event):
        account.set_event(event)
        event_name = event.name
        show_instance_list = event.show_list
        show_details_list = []
        for show_instance in show_instance_list:
            show_details = [show_instance.show_time, show_instance.hall_name]
            show_details_list.append(show_details)
        return event_name, show_details_list

    def select_show(self, account, show):
        account.set_show(show)
        zone_instance_list = show.event.zone_list
        zone_details_list = []
        for zone_instance in zone_instance_list:
            zone_details = [zone_instance.zone_name, zone_instance.row_col, zone_instance.price]
            zone_details_list.append(zone_details)
        return zone_details_list

    def select_zone(self, account, zone):
        account.set_zone(zone)
        show = account.selected_show
        hall_name = show.hall_name
        return self.get_all_show_seat(hall_name, zone)
    
    def select_seat(self, account, seat_list):
        account.extend(seat_list)
        return 'Please select receive method'
    
    def select_receive_method(self, account, method):
        account.set_receive_method(method)
        self.make_reservation(account)

    def make_reservation(self, account):
        pass

    def get_zone_show_seat(self, hall_name, zone):
        show_seat_dict = {}
        for r, c in zone.row_col.items():
            zone_row = r
            zone_col = c
            for hall_seat_instance in self.__hall_seat_list:
                if hall_seat_instance.hall_name == hall_name:
                    seat_no = hall_seat_instance.seat_no
                    seat_no_split = seat_no.split('-') # [seat_row, seat_col]
                    if seat_no_split[0] == zone_row and (zone_col[0] <= int(seat_no_split[1]) <= zone_col[1]):
                        show_seat_dict[seat_no] = hall_seat_instance.is_reserved
            for showseat_instance in self.__showseat_list:
                if showseat_instance.hall_name == hall_name:
                    seat_no = showseat_instance.seat_no
                    seat_no_split = seat_no.split('-') # [seat_row, seat_col]
                    if seat_no_split[0] == zone_row and (zone_col[0] <= int(seat_no_split[1]) <= zone_col[1]):
                        show_seat_dict[seat_no] = showseat_instance.is_reserved
        return show_seat_dict

    def search_event(self, event):
        for ev in self.__event_list:
            if ev == event:
                return event
        return 'Not Found'
    
    def search_account(self, account_name):
        for account in self.__account_list:
            if account.name == account_name:
                return account
            return 'Not Found'
    
class Account:
    def __init__(self, name, surname, username, password, citizen_id, phone_no, address, special=False):
        self.__name = name
        self.__surname = surname 
        self.__username = username 
        self.__password = password
        self.__citizen_id = citizen_id 
        self.__phone_no = phone_no
        self.__address = address 
        self.__special = special
        self.__reservation_list = []
        self.__ticket_list = []
    
    def register_special_member(self):
        if self.is_special == False:
            self.__special = True
            return "Success"
        else:
            return "This account is special member!!"
    
    @property
    def name(self):
        return self.__name
    
    @property
    def is_special(self):
        return self.__special

    @property
    def selected_event(self):
        return self.__selected_event

    @property
    def selected_show(self):
        return self.__selected_show

    @property
    def selected_zone(self):
        return self.__selected_zone

    @property
    def selected_seat(self):
        return self.__selected_seat
    
    @property
    def selected_receive_method(self):
        return self.__selected_receive_method

class Event:
    def __init__(self, event_name, event_date, event_hall, ticket_sale_date, ticket_sale_status, intro):
        self.__event_name = event_name
        self.__event_date = event_date
        self.__event_hall = event_hall
        self.__ticket_sale_date = ticket_sale_date
        self.__ticket_sale_status = ticket_sale_status
        self.__intro = intro
        self.__show_list = []
        self.__zone_list = []

    @property
    def name(self):
        return self.__event_name

    @property
    def show_list(self):
        return self.__show_list
    
    @property
    def zone_list(self):
        return self.__zone_list

class Show:
    def __init__(self, event, show_date, show_time):
        self.__event = event
        self.__show_date = show_date
        self.__show_time = show_time

    @property
    def show_time(self):
        return self.__show_time
    
    # @property
    # def show_date(self):
    #     return self.__show_date
    
    @property
    def event(self):
        return self.__event

class Zone:
    def __init__(self, zone_name, price, row, col):
        self.__zone_name = zone_name
        self.__price = price
        self.__row = row  #[A,F]
        self.__col = col #[1,10]
        self.__show_seat_list = []

    def add_show_seat(self, show_seat):
        self.__show_seat_list.append(show_seat)

    @property
    def zone_name(self):
        return self.__zone_name
    
    @property
    def row_col(self):
        return self.__row_col
    
    @property
    def price(self):
        return self.__price
    
class Hall:
    def __init__(self, hall_name):
        self.__hall_name = hall_name
        self.__hall_seat_list = []

    def add_hall_seat(self, hall_seat):
        self.__hall_seat_list.append(hall_seat)

    @property
    def hall_name(self):
        return self.__hall_name
    
    @property
    def hall_seat_list(self):
        return self.__hall_seat_list
    
class HallSeat:
    def __init__(self, seat_no):
        self.__seat_no = seat_no
  
    @property
    def seat_no(self):
        return self.__seat_no

class ShowSeat(HallSeat):
    def __init__(self, seat_no, show, zone):
        super().__init__(seat_no)
        self.__show = show
        self.__zone = zone
        self.__is_reserved = True
    @property
    def show(self):
        return self.__show
    
    @property
    def zone(self):
        return self.__zone
    
    @property
    def is_reserved(self):
        return self.__is_reserved

class Payment:
    def __init__(self, reservation, total_price, recieve_method, create_on):
        self.__reservation = reservation
        self.__total_price = total_price
        self.__recieve_method = recieve_method
        self.__create_on = create_on
        
class Reservation:
    def __init__(self, account, reservation_no, event_name, show_date, status = 'Not pay yet'):
        self.__account = account
        self.__reservation_no = reservation_no
        self.__event_name = event_name
        self.__show_date = show_date
        self.__status = status
        self.__show_seat_list = []

class Ticket:
    def __init__(self, ticket_no, show_seat):
        self.__ticket_no = ticket_no
        self.__showseat = show_seat

    @property
    def ticket_no(self):
        return self.__ticket_no

def create_instance():
    Hall_1 = Hall('JJ HALL ชั้น 6 ศูนย์การค้าเจเจมอลล์')
    Hall_2 = Hall('Exhibition Hall 3-4, ศูนย์ประชุมแห่งชาติสิริกิติ์')
    Hall_3 = Hall('oo')

    listrow = 'ABC'
    listcol = [1,20]

    for row in listrow:
        for col in range(listcol[0], listcol[1]+1):
            Hall_1.add_hall_seat(HallSeat(row + '-' + str(col)))

    for seat in Hall_1.hall_seat_list:
        print(seat.seat_no)
create_instance()

