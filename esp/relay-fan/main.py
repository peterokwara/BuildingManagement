#Peter Okwara
# F17/36211/2013 

# This piece of code awaits for instructions to turn on or off a GPIO pin to control a relay
import connectWifi
import time
import config
import json
from dht import DHT11
from machine import Pin
from umqtt.simple import MQTTClient

# connect to wifi
connectWifi.connect()

# set GPIO_2 pin as an output pin
RPin = Pin(2, Pin.OUT, value=0)

SERVER = config.MQTT_CONFIG['MQTT_HOST']
PORT = config.MQTT_CONFIG['PORT']
SENSOR_ID = config.MQTT_CONFIG['SENSOR_ID']
PUB_TOPIC = config.MQTT_CONFIG['PUB_TOPIC']

c = MQTTClient(SENSOR_ID, SERVER)

# function to set relay on
def relay_on():
    send("Relay on")
    RPin.on()

# function to set relay off
def relay_off():
    send("Relay off")
    RPin.off()

# function to send confirmation that relay is on or off
def send(data):
    c.publish(PUB_TOPIC, json.dumps(data))

# function to subscribe for incomimg commands
def sub_cb(topic, msg):
    print((topic, msg))
    command = msg.decode('ASCII')
    if command == "on":
        relay_on()
    elif command == "off":
        relay_off()


def main(server=SERVER):
    c.set_callback(sub_cb)
    c.connect()
    c.subscribe(PUB_TOPIC)
    # check for incoming messages/commands
    while True:
        if True:
            # Blocking wait for message
            c.wait_msg()
        else:
            # Non-blocking wait for message
            c.check_msg()
            # Then need to sleep to avoid 100% CPU usage (in a real
            # app other useful actions would be performed instead)
            time.sleep(1)

    c.disconnect()


if __name__ == "__main__":
    main()
