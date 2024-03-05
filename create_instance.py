from thaiticket import WebController, Account, Hall, HallSeat, Zone, Event, Show

def create_instance():
    Hall_1 = Hall('JJ HALL ชั้น 6 ศูนย์การค้าเจเจมอลล์')
    Hall_2 = Hall('Exhibition Hall 3-4, ศูนย์ประชุมแห่งชาติสิริกิติ์')

    Event_1 = Event('2024 NA IN WOO Fan Meeting in Bangkok Touch my heart','23-03-2567',Hall_1,'2-03-2567-10:00AM','ON SALE NOW',
'''ช่องทางการจำหน่ายบัตรและชำระเงิน
เริ่มจำหน่ายบัตร วันเสาร์ที่ 2 มีนาคม 2567 ตั้งแต่เวลา 10.00 น. เป็นต้นไป ทุกช่องทางการจำหน่าย โดยการจำหน่ายบัตรช่วงเวลา 10.00 - 23.59 น. จะเปิดจำหน่ายบัตรและชำระเงินเฉพาะช่องทางดังต่อไปนี้
1. เคาน์เตอร์ไทยทิคเก็ตเมเจอร์ 11 สาขาหลัก / โรงภาพยนตร์เมเจอร์ซีนีเพล็กซ์และอีจีวี / ไปรษณีย์ไทย / บิ๊กซี และ โลตัส
ตรวจสอบจุดจำหน่ายได้ที่ >> https://corporate.thaiticketmajor.com/outlet-location.php
สามารถชำระเงินได้ดังนี้
1.1 บัตรเครดิตหรือบัตรเดบิต (Convenience fee 3%)
1.2 เงินสด
 
2. ทางเว็บไซต์ www.thaiticketmajor.com *ไม่มีการรันคิวหน้าเว็บไซต์*
สามารถชำระเงินได้ดังนี้
2.1 บัตรเครดิตหรือบัตรเดบิต (Convenience fee 3%)
2.2 ชำระทันทีผ่านแอปพลิเคชัน K Pay Plus, BBL iBanking (Convenience fee 0.5%) / Shopee Pay, True Money, Alipay, WeChat pay (Convenience fee 3%)
 
3. ทาง TTM Call Center 02-262-3456 สามารถชำระเงินได้ดังนี้
3.1 ชำระทันทีผ่านแอปพลิเคชัน K Pay Plus (Convenience fee 0.5%)
 
**และวันอาทิตย์ที่ 3 มีนาคม 2567 เวลา 00.01 น. เป็นต้นไป จะเปิดจำหน่ายบัตรและชำระเงินผ่านทุกช่องทางตามปกติ**
 
* ติดตามรายละเอียดเพิ่มเติมได้ผ่านช่องทาง 
Facebook Fanpage : facebook.com/ SimpleP.Entertainment
Twitter : twitter.com/ SimpleP.Entertainment
IG : SimpleP.Entertainment
TikTok : SimpleP.Entertainment 
 
** สอบถามรายละเอียดการซื้อบัตรเพิ่มเติม TTM Call Center 02-262-3456 หรือ cs@thaiticketmajor.com
เงื่อนไขการซื้อบัตร :
- จำกัดการซื้อทุกช่องทาง 1 ท่านต่อบัตร 6 ใบ 
- ราคาบัตรยังไม่รวมค่าธรรมเนียมการออกบัตรใบละ 30 บาท 
- เด็กที่มีความสูงเกิน 100 เซนติเมตร จะต้องมีบัตรในการเข้างาน
- ใช้บัตรกระดาษในการเข้างาน 
- โปรดระวังมิจฉาชีพที่แฝงมาในรูปแบบต่างๆ เช่น การรับจองบัตร การให้โค้ดจอง การซื้อ-ขายบัตรนอกระบบ การแอบอ้างเป็นพนักงานบริษัทฯ เป็นต้น
- การนำบัตรไปขายต่อหรือแจกเพื่อการโฆษณาหรือประชาสัมพันธ์โดยไม่ได้รับอนุญาตจากบริษัทฯ ถือว่ามีความผิดทางกฎหมาย
- การนำบัตรไปขายต่อเพิ่มราคา หากตรวจสอบและพบหลักฐานการทำความผิด ทางบริษัทฯ ขอสงวนสิทธิ์ในการยกเลิกการจองในกรณียังไม่ชำระเงินหรือยกเลิกบัตรเป็นโมฆะในกรณีที่ชำระเงินแล้ว 
และนำบัตรกลับคืนสู่ระบบเพื่อจำหน่ายใหม่อีกครั้ง''')

    Show_1 = Show(Event_1,'23-03-2567','18.00')

    Event_1_zone_A1 = Zone('A1','6500',['AA','AB','AC','AD','AE','AF'],[1,16])
    Event_1_zone_A2 = Zone('A2','6500',['AA','AB','AC','AD','AE','AF'],[1,16])
    Event_1_zone_A3 = Zone('A3','6500',['AA','AB','AC','AD','AE','AF'],[1,16])
    Event_1_zone_B1 = Zone('B1','5500',['BA','BB','BC','BD','BE','BF','BG','BH','BJ','BK','BL','BM'],[1,16])
    Event_1_zone_B2 = Zone('B2','5500',['BA','BB','BC','BD','BE','BF','BG','BH','BJ','BK','BL','BM'],[1,16])
    Event_1_zone_B3 = Zone('B3','5500',['BA','BB','BC','BD','BE','BF','BG','BH','BJ','BK','BL','BM'],[1,16])
    Event_1_zone_C1 = Zone('C1','4500',['CA','CB','CD','CE'],[1,16])
    Event_1_zone_C2 = Zone('C2','4500',['CA','CB','CD','CE'],[1,16])
    Event_1_zone_C3 = Zone('C3','4500',['CA','CB','CD','CE'],[1,16])
    Event_1_zone_D1 = Zone('D1','3500',['DA','DB'],[1,16])
    Event_1_zone_D2 = Zone('D2','3500',['DA','DB'],[1,16])
    Event_1_zone_D3 = Zone('D3','3500',['DA','DB'],[1,16])
    
    Event_1_zone_list = [Event_1_zone_A1,Event_1_zone_A2,Event_1_zone_A3,Event_1_zone_B1,Event_1_zone_B2,Event_1_zone_B3,Event_1_zone_C1,Event_1_zone_C2,Event_1_zone_C3,Event_1_zone_D1,Event_1_zone_D2,Event_1_zone_D3]
    
    for zone in Event_1_zone_list:
        Event_1.add_zone(zone)
        print(zone.row,zone.col)
    Event_1.add_show(Show_1)

    
    # listrow = 'ABC'
    # listcol = [1,20]

    # for row in listrow:
    #     for col in range(listcol[0], listcol[1]+1):
    #         Hall_1.add_hall_seat(HallSeat(row + '-' + str(col)))

    # for seat in Hall_1.hall_seat_list:
    #     print(seat.seat_no)
create_instance()
