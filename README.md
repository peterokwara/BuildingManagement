# BuildingManagement

peter@peter:~/Documents/Projects/BuildingManagement\$ dmesg | grep ttyUSB
picocom /dev/ttyUSB1 -b 115200
https://docs.micropython.org/en/latest/esp8266/tutorial/repl.html
https://learn.sparkfun.com/tutorials/micropython-programming-tutorial-getting-started-with-the-esp32-thing/all

peter@peter:~/Documents/Projects/BuildingManagement/esp/motion-sensor$ sudo ampy --port /dev/ttyUSB0 --baud 115200 put main.py
peter@peter:~/Documents/Projects/BuildingManagement/esp/motion-sensor$ sudo ampy --port /dev/ttyUSB0 --baud 115200 ls

peter@peter:~$ nmap -sP 192.168.0.1/24
peter@peter:~$ arp -a -n

ctrl a
ctrl x
ssh pi@<IP>
Next you will be prompted for the password for the pi login: the default password on Raspbian is raspberry. For security reasons it is highly recommended to change the default password on the Raspberry Pi. You should now be able to see the Raspberry Pi prompt, which will be identical to the one found on the Raspberry Pi itself.

mosquitto_sub –d –t armtronix_mqtt
mosquitto_pub –d –t armtronix_mqtt –m “Hello armtronix”

http://wp.spoton.cz/2017/11/29/micropython-on-esp-01-8266/
https://medium.com/@akash0x53/esp8266-micropython-101-435085ffae5c

https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f
