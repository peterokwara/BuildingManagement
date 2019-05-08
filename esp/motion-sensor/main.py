#Peter Okwara
# F17/36211/2013 

# This piece of code detects whether motion has been detected on the respective pir motion  
# sensor and determines whether someone is entering a room or leaving a room, relays that
# information as occupancy level

import esp
import machine
import connectWifi
import time
import config
import utime
import json

from machine import Pin
from umqtt.simple import MQTTClient

# connect to wifi first
connectWifi.connect()

# define pins for the pir motion sensor
pin_1 = machine.Pin(0, machine.Pin.IN)
pin_2 = machine.Pin(2, machine.Pin.IN)

state = "on"
motiondetected_1 = 0
motiondetected_2 = 0
time_s1 = 0
time_s2 = 0
time_comp = 0
count = 0


SERVER = config.MQTT_CONFIG['MQTT_HOST']
PORT = config.MQTT_CONFIG['PORT']
SENSOR_ID = config.MQTT_CONFIG['SENSOR_ID']
PUB_TOPIC = config.MQTT_CONFIG['PUB_TOPIC']

# set up interrupt functions for in case pir motion sensor 1 is triggered
def handle_interrupt_1(p_0):
    print('pin change', p_0)
    global motiondetected_1, time_s1
    motiondetected_1 = 1
    time_s1 = time.time()

# set up interrupt functions for in case pir motion sensor 2 is triggered
def handle_interrupt_2(p_1):
    print('pin change', p_1)
    global motiondetected_2, time_s2
    motiondetected_2 = 1
    time_s2 = time.time()

# set up interrupts for the two pins
pin_1.irq(trigger=Pin.IRQ_RISING, handler=handle_interrupt_1)
pin_2.irq(trigger=Pin.IRQ_RISING, handler=handle_interrupt_2)


def main(server=SERVER, port=PORT):
    # set up and connect to the MQTT client
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    c.connect()
    while True:
        global state, motiondetected_1, motiondetected_2, time_s1, time_s2, time_comp, count
        while True:
            time_comp = time_s1 - time_s2
            # determine if someone is moving in to a room and transmit the occupancy
            if time_comp < 0 and abs(time_comp) < 4:
                print("moving in")
                print(time_comp)
                time.sleep(2)
                count = count + 1
                time_s1 = 0
                time_s2 = 0
                data = {"occupancy": count}
                c.publish(PUB_TOPIC, json.dumps(data))
            # determine if someone is movint out of a room and transmit the occupancy
            elif time_comp > 0 and abs(time_comp) < 4:
                print("moving out")
                print(time_comp)
                time.sleep(2)
                count = count - 1
                if count < 0:
                    count = 0
                time_s1 = 0
                time_s2 = 0
                data = {"occupancy": count}
                c.publish(PUB_TOPIC, json.dumps(data))
            time_comp = 0
if __name__ == "__main__":
    main()
