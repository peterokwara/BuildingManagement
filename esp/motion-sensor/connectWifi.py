# Set up connection to wifi access point
def connect():
    import network
    import config

    ssid = config.WIFI_CONFIG['WIFI_ESSID']

    password = config.WIFI_CONFIG['WIFI_PASSWORD']

    station = network.WLAN(network.STA_IF)

    if station.isconnected() == True:
        print("Already connected")

    station.active(True)
    station.connect(ssid, password)

    while station.isconnected() == False:
        pass

    print("Connection successful")
    print(station.ifconfig())
