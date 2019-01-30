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
pinPir = machine.Pin(0, machine.Pin.IN, machine.Pin.PULL_UP)

state = 'off'
lockLow = True
motiondetected = 0
pause = 7000
takeLowTime = ''


SERVER = config.MQTT_CONFIG['MQTT_HOST']
PORT = config.MQTT_CONFIG['PORT']
SENSOR_ID = config.MQTT_CONFIG['SENSOR_ID']
SUB_TOPIC = config.MQTT_CONFIG['SUB_TOPIC']
PUB_TOPIC = config.MQTT_CONFIG['PUB_TOPIC']


def sub_cb(topic, msg):
    global state, motiondetected, updatestate
    print((topic, msg))
    command = msg.decode('ASCII')
    channel = topic.decode('ASCII')

    # check for topic and handle accordingly
    if channel == "pir_cmd":
        if command == "on":
            state = "on"
            print("Turned on")
        if command == "off":
            state = "off"
            print("Turned off")
            motiondetected = 0

    if channel == "pir_state":
        if command == "on":
            motiondetected = 1
        if command == "off":
            motiondetected = 0


def main(server=SERVER, port=PORT):
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    c.set_callback(sub_cb)

    while True:
        global state, motiondetected, updatestate, lockLow, takeLowTime

        c.connect()

        if pinPir.value() == 1 and motiondetected == 0:
            c.publish(PUB_TOPIC, b"on")
            motiondetected = 1
            print("motiondetected state is (on)", motiondetected)

        if pinPir.value() == 0 and motiondetected == 1:
            c.publish(PUB_TOPIC, b"off")
            motiondetected = 0
            print("motiondetected state is (off)", motiondetected)

        c.disconnect()


if __name__ == "__main__":
    main()
