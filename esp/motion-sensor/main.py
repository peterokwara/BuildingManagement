import esp
import machine
import connectWifi
import time
import config
import utime


from machine import Pin
from umqtt.simple import MQTTClient

connectWifi.connect()

# define pins for the pir motion sensor
pin = machine.Pin(0, machine.Pin.IN, machine.Pin.PULL_UP)

state = "on"
motiondetected = 0


SERVER = config.MQTT_CONFIG['MQTT_HOST']
PORT = config.MQTT_CONFIG['PORT']
SENSOR_ID = config.MQTT_CONFIG['SENSOR_ID']
PUB_TOPIC = config.MQTT_CONFIG['PUB_TOPIC']


def main(server=SERVER, port=PORT):
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    c.connect()
    time.sleep(2)
    while True:
        global state, motiondetected, updatestate
        if pin.value() == 1 and motiondetected == 0:
            print("Motion Detected")
            c.publish(PUB_TOPIC, b"on")
            motiondetected = 1

        if pin.value() == 0 and motiondetected == 1:
            print("Resetting sensor state")
            c.publish(PUB_TOPIC, b"off")
            motiondetected = 0


if __name__ == "__main__":
    main()
