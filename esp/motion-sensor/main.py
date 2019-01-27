import esp
import machine
import connectWifi
import time

from machine import Pin
from umqtt.simple import MQTTClient

connectWifi.connect()

pinPir = machine.Pin(0, machine.Pin.IN, machine.Pin.PULL_UP)
