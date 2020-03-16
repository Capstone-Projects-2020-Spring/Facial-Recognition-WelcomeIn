
import numpy as np
import cv2
from sshtunnel import SSHTunnelForwarder
import requests
import wget



remote_user = 'sean.droke'
remote_host = '68.81.115.174'
remote_port = 22
local_host = '127.0.0.1'
local_port = 8007

server = SSHTunnelForwarder(
    (remote_host, remote_port),
    ssh_username="sean.droke",
    ssh_password="Ocmd2019%%",
    remote_bind_address=(local_host, local_port),
    local_bind_address=(local_host, local_port)
)
server.start()
URL = "http://127.0.0.1:8007/footage/"

location = "Sean's House"
data = {'FileDescriptor': 'test'}

proxies = {"http": "http://127.0.0.1:8080",}

# multiple cascades: https://github.com/Itseez/opencv/tree/master/data/haarcascades
faceCascade = cv2.CascadeClassifier('Cascades/haarcascade_frontalface_default.xml')

cap = cv2.VideoCapture(0)
cap.set(3,640) # set Width
cap.set(4,480) # set Height

while True:
    ret, img = cap.read()
    img = cv2.flip(img, -1)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = faceCascade.detectMultiScale(
        gray,
        
        scaleFactor=1.2,
        minNeighbors=5
        ,     
        minSize=(20, 20)
    )

    for (x,y,w,h) in faces:
        cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = img[y:y+h, x:x+w]
        if w > 150:
            cv2.imwrite("testingBlueBox.png", img)
    
            

            

            
            
    


    cv2.imshow('video',img)

    k = cv2.waitKey(30) & 0xff
    if k == 27: # press 'ESC' to quit
        files = {'FileField': open('testingBlueBox.png', 'rb')}
        #r = requests.post(URL, data=data, files=files)
        break

print(server.local_bind_port)  # show assigned local port
# work with `SECRET SERVICE` through `server.local_bind_port`.

server.stop()

cap.release()
cv2.destroyAllWindows()
