"""from gpiozero import LED"""
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(PIN_NUMBER(),GPIO.OUT)
print("LED on")
GPIO.output(PIN_NUMBER(),GPIO.HIGH)
time.sleep(1)
print("LED off")
GPIO.output(PIN_NUMBER(),GPIO.LOW)


def PIN_NUMBER():
    return 17

"""led = LED(PIN_NUMBER())
state = False
change(led, state)

def change(led, state):
    if state == False:
        led.on()
        state = True
    else:
        led.off()
        state = False"""
