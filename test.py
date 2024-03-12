from create_instance import create_instance
import time


#controller = create_instance()

#seat_selected = "AA-1,AA-2,AA-3"

# named_tuple = time.localtime() # get struct_time
time_string = time.strftime("%d-%m-%Y, %H:%M:%S", time.localtime())

print(time_string)