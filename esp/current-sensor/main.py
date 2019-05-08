# Peter Okwara
# F17/36211/2013 

# This piece of code collects analog values for current from the ACS712 5A current sensor 
# and provides the current and power consumed by devices connected to the current sensor

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

# function for callibrating the current sensor
def calibrate():
    global zero
    acc = 0
    x = 0
    while x < 10:
        acc += adc.read()
        x = x + 1
    zero = acc / 10
    return zero

# function for getting the current and power value from sensor
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

# function for sending data to the MQTT broker
def send(data):
    c = MQTTClient(SENSOR_ID, SERVER, 1883)
    c.connect()
    c.publish(PUB_TOPIC, data)
    c.disconnect()


def main():
    # start by callibrating the sensor
    calibrate()
    while True:
        # read the analog value from the sensor
        data = read_sensor()
        # transmit the analog value via MQTT
        send(data)


if __name__ == "__main__":
    main()
