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
pin_1 = machine.Pin(0, machine.Pin.IN, machine.Pin.PULL_UP)
pin_2 = machine.Pin(2, machine.Pin.IN, machine.Pin.PULL_UP)

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


def main(server=SERVER, port=PORT):
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    time.sleep(2)
    while True:
        global state, motiondetected_1, motiondetected_2, time_s1, time_s2, count
        c.connect()
        if pin_1.value() == 1 and motiondetected_1 == 0:
            print("Motion from sensor 1 detected")
            time_s1 = time.time()
            c.publish(PUB_TOPIC, b"sensor_1_on")
            motiondetected_1 = 1

        if pin_1.value() == 0 and motiondetected_1 == 1:
            print("Resetting sensor 1 state")
            time_s2 = time.time()
            c.publish(PUB_TOPIC, b"sensor_1_off")
            motiondetected_1 = 0

        if pin_2.value() == 1 and motiondetected_2 == 0:
            print("Motion from sensor 2 detected")
            c.publish(PUB_TOPIC, b"sensor_2_on")
            motiondetected_2 = 1

        if pin_2.value() == 0 and motiondetected_2 == 1:
            print("Resetting sensor 2 state")
            c.publish(PUB_TOPIC, b"sensor_2_off")
            motiondetected_2 = 0


if __name__ == "__main__":
    main()
