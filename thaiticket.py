class WebController:
    reservation_no = 1

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

    def add_reservation(self, reservation):
        self.__reservation_list.append(reservation)
    
    @property
    def event_list(self):
        return self.__event_list

    def select_event(self, event_name):
        event = self.search_event(event_name)
        data = {}
        data['event_name'] = event.name
        data['event_date'] = event.date
        data['event_introduction'] = event.intro
        data['event_ticket_sale_date'] = event.ticket_sale_date
        hall = event.hall
        data['hall_name'] = hall.name
        show_list = event.show_list
        data['show_list'] = []
        for show in show_list:
            data['show_list'].append({'show_date' : show.show_date, 'show_time' : show.show_time})
        zone_list = event.zone_list
        data['zone_price'] = set()
        for zone in zone_list:
            data['zone_price'].add(zone.price)

        return data
    
    def select_show(self, event_name, show_date, show_time):
        event = self.search_event(event_name)
        data = {}
        data['zone_available_seat'] = []
        zone_list = event.zone_list
        show = event.search_show(show_date, show_time)
        for zone in zone_list:
            zone_name = zone.name
            available_seat = zone.get_available_seat(show)
            data['zone_available_seat'].append({'zone_name' : zone_name, 'available_seat' : available_seat})

        return data
    
    def select_zone(self, account_id, event_name, show_date, show_time, zone_name):
        event = self.search_event(event_name)
        show = event.search_show(show_date, show_time)
        zone = event.search_zone(zone_name)
        zone_row_list = zone.row
        zone_col_range = zone.col
        zone_show_seat_list = zone.show_seat_list
        hall = event.hall
        hall_seat_list = hall.seat_list
        hall_all_seat_no = [hall_seat.seat_no for hall_seat in hall_seat_list]

        data = {}
        data['zone_seat'] = WebController.check_available_seat_in_zone_of_show(zone_show_seat_list, \
                                                                               hall_all_seat_no, show, \
                                                                                zone_row_list, \
                                                                                zone_col_range)
        account = self.search_account(account_id)
        address = account.address
        special = account.is_special
        data['account_address'] = address
        data['is_special'] = special

        return data
    
    def select_seat(self, account_id, event_name, show_date, show_time, zone_name, seat_selected):
        account = self.search_account_by_id(account_id)
        event = self.search_event(event_name)
        show = event.search_show(show_date, show_time)
        zone = event.search_zone(zone_name)
        for seat_no in seat_selected:
            zone.create_show_seat(seat_no, show, zone)
        reservation = self.create_reservation(account, event_name, show_date, show_time, seat_selected)
        account.add_reservation(reservation)

    def create_reservation(self, account, event_name, show_date, show_time, seat_list):
        reservation = Reservation(account, self.reservation_no, event_name, show_date, show_time, seat_list)
        self.add_reservation(reservation)
        self.reservation_no += 1
        
        return reservation
    
    def check_available_seat_in_zone_of_show(show_seat_list, hall_seat_no_list, show, zone_row_list, zone_col_range):
        data = []
        show_seat_no_list = []
        for show_seat in show_seat_list:
            if show_seat.show == show:
                show_seat_no_list.append(show_seat.seat_no)

        for hall_seat_no in hall_seat_no_list:
            seat_no_splited = hall_seat_no.split('-')
            hall_seat_row = seat_no_splited[0]
            hall_seat_col = seat_no_splited[1]
            if hall_seat_row in zone_row_list and zone_col_range[0] <= hall_seat_col <= zone_col_range[1]:
                if hall_seat_no not in show_seat_no_list:
                    data.append({'seat_no' : hall_seat_no, 'status' : 'available'})
                else:
                    data.append({'seat_no' : hall_seat_no, 'status' : 'not available'})

        return data

    def search_event(self, event_name):
        for event in self.__event_list:
            if event.name == event_name:
                return event
        return 'Not Found'
    
    def search_account_by_name(self, account_name):
        for account in self.__account_list:
            if account.name == account_name:
                return account
            return 'Not Found'
        
    def search_account_by_id(self, account_id):
        for account in self.__account_list:
            if account.id == account_id:
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
    
    # def register_special_member(self):
    #     if self.is_special == False:
    #         self.__special = True
    #         return "Success"
    #     else:
    #         return "This account is special member!!"
    
    @property
    def name(self):
        return self.__name
    
    @property
    def id(self):
        return self.__citizen_id
    
    @property
    def is_special(self):
        return self.__special
    
    @property
    def address(self):
        return self.__address
    
    def add_reservation(self, reservation):
        self.__reservation_list.append(reservation)

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
    def date(self):
        return self.__event_date
    
    @property
    def ticket_sale_date(self):
        return self.__ticket_sale_date
    
    @property
    def ticket_sale_status(self):
        return self.__ticket_sale_status
    
    @property
    def intro(self):
        return self.__intro
    
    @property
    def hall(self):
        return self.__event_hall

    @property
    def show_list(self):
        return self.__show_list
    
    @property
    def zone_list(self):
        return self.__zone_list
    
    def add_show(self, show):
        self.__show_list.append(show)

    def add_zone(self, zone):
        self.__zone_list.append(zone)

    def search_show(self, show_date, show_time):
        for show in self.__show_list:
            if show.show_date == show_date and show.show_time == show_time:
                return show
        return 'Not Found'
    
    def search_zone(self, zone_name):
        for zone in self.__zone_list:
            if zone.name == zone_name:
                return zone
        return 'Not Found'

class Show:
    def __init__(self, event, show_date, show_time):
        self.__event = event
        self.__show_date = show_date
        self.__show_time = show_time

    @property
    def show_time(self):
        return self.__show_time
    
    @property
    def show_date(self):
        return self.__show_date
    
    @property
    def event(self):
        return self.__event

class Zone:
    def __init__(self, zone_name, price, row, col):
        self.__zone_name = zone_name
        self.__price = price
        self.__row = row 
        self.__col = col 
        self.__show_seat_list = []

    def add_show_seat(self, show_seat):
        self.__show_seat_list.append(show_seat)

    @property
    def show_seat_list(self):
        return self.__show_seat_list

    @property
    def name(self):
        return self.__zone_name

    @property
    def row(self):
        return self.__row
    
    @property
    def col(self):
        return self.__col
    
    @property
    def price(self):
        return self.__price
    
    def get_available_seat(self, show):
        first_seat = self.col[0]
        last_seat = self.col[1]
        number_col = (last_seat - first_seat) + 1
        number_row = len(self.row)
        available_seat_amount =  number_row * number_col
        for show_seat in self.__show_seat_list:
            if show == show_seat.show:
                available_seat_amount -= 1
        return available_seat_amount
    
    def create_show_seat(self, seat_no, show, zone):
        show_seat = ShowSeat(seat_no, show, zone)
        self.add_show_seat(show_seat)
    
class Hall:
    def __init__(self, hall_name):
        self.__hall_name = hall_name
        self.__hall_seat_list = []

    def add_hall_seat(self, hall_seat):
        self.__hall_seat_list.append(hall_seat)

    @property
    def name(self):
        return self.__hall_name
    
    @property
    def seat_list(self):
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
    def __init__(self, account, reservation_no, event_name, show_date, show_time, show_seat_list, status = 'Not pay yet'):
        self.__account = account
        self.__reservation_no = reservation_no
        self.__event_name = event_name
        self.__show_date = show_date
        self.__show_time = show_time
        self.__status = status
        self.__show_seat_list = show_seat_list

class Ticket:
    def __init__(self, ticket_no, show_seat):
        self.__ticket_no = ticket_no
        self.__showseat = show_seat

    @property
    def ticket_no(self):
        return self.__ticket_no
    