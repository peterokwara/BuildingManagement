import connectWifi
import time
import config
import json
from dht import DHT11
from machine import Pin
from umqtt.simple import MQTTClient

connectWifi.connect()
d = DHT11(Pin(2))

SERVER = config.MQTT_CONFIG['MQTT_HOST']
PORT = config.MQTT_CONFIG['PORT']
SENSOR_ID = config.MQTT_CONFIG['SENSOR_ID']
PUB_TOPIC = config.MQTT_CONFIG['PUB_TOPIC']


def read_sensor():
    d.measure()
    return {
        "temperature": d.temperature(),
        "humidity": d.humidity()
    }


def send(data):
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    c.connect()
    c.publish(PUB_TOPIC, json.dumps(data))
    c.disconnect()


def main():
    while True:
        data = read_sensor()
        print("Sending data", data)
        send(data)
        time.sleep(8)


if __name__ == "__main__":
    main()
