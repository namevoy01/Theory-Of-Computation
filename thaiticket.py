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
    
    def search_event(self, event_name):
        for event in self.__event_list:
            if event.name == event_name:
                return event
        return 'Error'

    def select_show(self, account, show):
        pass

    def select_zone(self, account, zone):
        pass
    
    def select_seat(self, account, seat_list):
        pass
    
    def select_receive_method(self, account, method):
        pass

    def make_reservation(self, account):
        pass

    def get_zone_show_seat(self, hall_name, zone):
        pass
    
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
        self.__row = row  #[A,F]
        self.__col = col #[1,10]
        self.__show_seat_list = []

    def add_show_seat(self, show_seat):
        self.__show_seat_list.append(show_seat)

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
    