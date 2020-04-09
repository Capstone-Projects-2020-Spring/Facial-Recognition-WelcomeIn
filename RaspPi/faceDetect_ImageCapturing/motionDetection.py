
import numpy as np
import cv2
from sshtunnel import SSHTunnelForwarder
import requests
import wget
#import sys
#import videoFaceDetection
import os


remote_user = 'sean.droke'
remote_host = '73.198.70.162'
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
faceCascade = cv2.CascadeClassifier('Cascades/upperbody_recognition_model.xml')
#fullbody_recognition_model.xml
#haarcascade_frontalface_default.xml


cap = cv2.VideoCapture(0)
cap.set(3,640) # set Width
cap.set(4,480) # set Height

#0x00000021
fourcc =  cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter('output.mp4',fourcc, 20.0, (640,480))

while True:
    ret, img = cap.read()
    #img = cv2.flip(img, -1)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = faceCascade.detectMultiScale(
        gray,
        
        scaleFactor=1.2,
        minNeighbors=3
        ,     
        minSize=(30, 40)
    )

    for (x,y,w,h) in faces:
        cv2.rectangle(img,(x,y),(x+w,y+h),(0,0,255),2)
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = img[y:y+h, x:x+w]
        if h > 50:
            out.write(img)
                 

         
    cv2.imshow('video',img)

    k = cv2.waitKey(30) & 0xff
    if k == 27:
        #sys.argv=['output.mp4']
        #exec(open('videoFaceDetection').read())
        
        
        # press 'ESC' to quit
        #os.system('MP4Box -add output.avi newMP4.mp4')
        #files = {'FileField': open('output.avi', 'rb')}
        #r = requests.post(URL, data=data, files=files)
        break
#files = {'FileField': open('new4.mp4', 'rb')}
#r = requests.post(URL, data=data, files=files)
cap.release()
out.release()
os.system('python videoFaceDetection.py output.mp4')
server.stop()
cv2.destroyAllWindows()

