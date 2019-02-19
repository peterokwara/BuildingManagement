from machine import Pin
from dht import DHT11
d = DHT11(Pin(0))
d.measure()
d.temperature()
