#Peter Okwara
# F17/36211/2013 

# This piece of code collects temperature and humidity values from the DHT11 temperature
# and humidity sensor and transmits them to the mqtt broker

import connectWifi
import time
import config
import json
from dht import DHT11
from machine import Pin
from umqtt.simple import MQTTClient

# connect to wifi first
connectWifi.connect()

# set the pin for reading the humidity ant temperature values
d = DHT11(Pin(2))

SERVER = config.MQTT_CONFIG['MQTT_HOST']
PORT = config.MQTT_CONFIG['PORT']
SENSOR_ID = config.MQTT_CONFIG['SENSOR_ID']
PUB_TOPIC = config.MQTT_CONFIG['PUB_TOPIC']

# function for reading the temperature and humidity values
def read_sensor():
    d.measure()
    return {
        "temperature": d.temperature(),
        "humidity": d.humidity()
    }

# function for sending the temperature and humidity values
def send(data):
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    c.connect()
    c.publish(PUB_TOPIC, json.dumps(data))
    c.disconnect()


def main():
    while True:
        # get the values for temperature and humidity
        data = read_sensor()
        print("Sending data", data)
        # transmit the values for temperature and humidity
        send(data)
        # delay for 8 seconds before reading the values again
        time.sleep(8)


if __name__ == "__main__":
    main()
