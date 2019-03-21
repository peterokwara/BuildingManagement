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
pinPir1 = machine.Pin(2, machine.Pin.IN, machine.Pin.PULL_UP)

state = 'off'
lockLow = True
motiondetectedone = 0
motiondetectedtwo = 0
pause = 7000
takeLowTime = ''


SERVER = config.MQTT_CONFIG['MQTT_HOST']
PORT = config.MQTT_CONFIG['PORT']
SENSOR_ID = config.MQTT_CONFIG['SENSOR_ID']
PUB_TOPIC = config.MQTT_CONFIG['PUB_TOPIC']


def sub_cb(topic, msg):
    global state, motiondetectedone, motiondetectedtwo, updatestate
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
            motiondetectedone = 0
            motiondetectedtwo = 0

    if channel == "pir_state":
        if command == "on":
            motiondetectedone = 1
            motiondetectedtwo = 1

        if command == "off":
            motiondetectedone = 0
            motiondetectedtwo = 0


def main(server=SERVER, port=PORT):
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    c.set_callback(sub_cb)

    while True:
        global state, motiondetectedone, updatestate, lockLow, takeLowTime, motiondetectedtwo

        c.connect()

        if pinPir.value() == 1 and motiondetectedone == 0:
            c.publish(PUB_TOPIC, b"pir1on")
            motiondetectedone = 1
            print("motiondetected state is (on)", motiondetectedone)

        if pinPir.value() == 0 and motiondetectedone == 1:
            c.publish(PUB_TOPIC, b"pir1off")
            motiondetectedone = 0
            print("motiondetected state is (off)", motiondetectedone)

        c.disconnect()
        c.connect()

        if pinPir1.value() == 1 and motiondetectedtwo == 0:
            c.publish(PUB_TOPIC, b"pir2on")
            motiondetectedtwo = 1
            print("motiondetected state is (on)", motiondetectedtwo)

        if pinPir1.value() == 0 and motiondetectedtwo == 1:
            c.publish(PUB_TOPIC, b"pir2off")
            motiondetectedtwo = 0
            print("motiondetected state is (off)", motiondetectedtwo)

        c.disconnect()


if __name__ == "__main__":
    main()
