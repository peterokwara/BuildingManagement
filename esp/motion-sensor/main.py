import esp
import machine
import connectWifi
import time
import config
import utime
import json

from machine import Pin
from umqtt.simple import MQTTClient

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


def handle_interrupt_1(p_0):
    print('pin change', p_0)
    global motiondetected_1
    motiondetected_1 = 1


def handle_interrupt_2(p_1):
    print('pin change', p_1)
    global motiondetected_2
    motiondetected_2 = 1


pin_1.irq(trigger=Pin.IRQ_RISING, handler=handle_interrupt_1)
pin_2.irq(trigger=Pin.IRQ_RISING, handler=handle_interrupt_2)


def main(server=SERVER, port=PORT):
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    c.connect()
    while True:
        global state, motiondetected_1, motiondetected_2, time_s1, time_s2, count
        while True:
            if motiondetected_1 == 1:
                print("Motion from sensor 1 detected")
                c.publish(PUB_TOPIC, b"sensor_1_on")
                motiondetected_1 = 0

            if motiondetected_2 == 1:
                print("Motion from sensor 2 detected")
                c.publish(PUB_TOPIC, b"sensor_2_on")
                motiondetected_2 = 0


if __name__ == "__main__":
    main()
