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
PUB_TOPIC1 = config.MQTT_CONFIG['PUB_TOPIC1']
PUB_TOPIC2 = config.MQTT_CONFIG['PUB_TOPIC2']


def read_sensor():
    d.measure()
    return (d.temperature(), d.humidity())


def sendTemperature(data):
    c = MQTTClient(SENSOR_ID, SERVER, int(PORT))
    c.connect()
    c.publish(PUB_TOPIC1, json.dumps(data))
    c.disconnect()


def sendHumidity(data):
    c = MQTTClient(SENSOR_ID, SERVER, int(PORT))
    c.connect()
    c.publish(PUB_TOPIC2, json.dumps(data))
    c.disconnect()


def main():
    while True:
        temperature, humidity = read_sensor()
        print("Sending data for temperature ", temperature, " and humidity ", humidity)
        sendTemperature(temperature)
        sendHumidity(humidity)
        time.sleep(10)


if __name__ == "__main__":
    main()
