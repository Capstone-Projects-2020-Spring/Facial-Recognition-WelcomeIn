from sshtunnel import SSHTunnelForwarder
import requests
import wget
import subprocess
import os.path
import shlex
import cv2
import sys



# Load the cascade
face_cascade = cv2.CascadeClassifier('Cascades/haarcascade_frontalface_default.xml')

# To capture video from webcam. 
#cap = cv2.VideoCapture(0)
# To use a video file as input
filename = sys.argv[1]
saveName = filename[0:-5]
cap = cv2.VideoCapture(filename)
#cap = cv2.VideoCapture('video.h264')
picName = ("{0}Face.png".format(saveName))




#SERVER setup
'''
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

'''




print(cap)
print('Face detection started')
while True:
    # Read the frame
    ret, img = cap.read()
    if ret == True:
            
        # Convert to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        # Detect the faces
        faces = face_cascade.detectMultiScale(gray, 1.2, 5)
        # Draw the rectangle around each face
        for (x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)
            if h > 50:
                cv2.imwrite(picName, img)
                
        # Display
        #cv2.imshow('img', img)
        
        
        
        # Stop if escape key is pressed
        k = cv2.waitKey(30) & 0xff
        if k==27:
            break
    else:
        break
# Release the VideoCapture object
os.system('python3 testSSH_face.py {0}'.format(picName))
print('Face detection finished')
cap.release()

#SENDING video
print('Video conversion started')
command = shlex.split("MP4Box -add {f}.h264 {f}.mp4".format(f=saveName))
output = subprocess.check_output(command, stderr=subprocess.STDOUT)
print('Conversion completed')

videoFileName = "{0}.mp4".format(saveName)

os.system('python3 testSSH_video.py {0}'.format(videoFileName))


cv2.destroyAllWindows()