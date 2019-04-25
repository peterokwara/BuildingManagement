import connectWifi
import time
import config
import json
import time
import utime
import machine
import math
from umqtt.simple import MQTTClient

connectWifi.connect()
ADC_SCALE = 1023.0
VREF = 5.0
sensitivity = 0.185
U = 230
adc = machine.ADC(0)

SERVER = config.MQTT_CONFIG['MQTT_HOST']
PORT = config.MQTT_CONFIG['PORT']
SENSOR_ID = config.MQTT_CONFIG['SENSOR_ID']
PUB_TOPIC = config.MQTT_CONFIG['PUB_TOPIC']


def calibrate():
    global zero
    acc = 0
    x = 0
    while x < 10:
        acc += adc.read()
        x = x + 1
    zero = acc / 10
    return zero


def read_sensor():
    frequency = 50
    period = 1000000 / frequency
    Isum = 0
    measurements_count = 0
    t_start = utime.ticks_ms()

    while (utime.ticks_ms() - t_start < period):
        Inow = adc.read() - zero
        Isum += Inow*Inow
        measurements_count = measurements_count + 1

    Irms = math.sqrt(Isum/measurements_count) / ADC_SCALE * VREF / sensitivity

    P = U * Irms
    return {
        "current": Irms,
        "power": P
    }


def send():
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    c.connect()
    c.publish(PUB_TOPIC, "sawasawao")
    c.disconnect()


def main():
    calibrate()
    while True:
        data = read_sensor()
        # print("Sending data", data)
        send()
        # time.sleep(10)


if __name__ == "__main__":
    main()
