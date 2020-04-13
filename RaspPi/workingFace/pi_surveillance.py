# USAGE
# python pi_surveillance.py --conf conf.json

# import the necessary packages
from pyimagesearch.tempimage import TempImage
from picamera.array import PiRGBArray
from picamera import PiCamera
import argparse
import warnings
import datetime
#import dropbox
import imutils
import json
import time
from time import sleep
import cv2
import os
import subprocess
import os.path
import shlex
from sshtunnel import SSHTunnelForwarder
import requests
import wget

args = {
    "show_video": True,
    "use_dropbox": False,
    "dropbox_access_token": "YOUR_DROPBOX_KEY",
    "dropbox_base_path": "YOUR_DROPBOX_PATH",
    "min_upload_seconds": 3.0,
    "min_motion_frames": 8,
    "camera_warmup_time": 2.5,
    "delta_thresh": 5,
    "resolution": [640, 480],
    "fps": 16,
    "min_area": 5000
}



# filter warnings, load the configuration and initialize the Dropbox
# client
warnings.filterwarnings("ignore")
conf = args
client = None

# initialize the camera and grab a reference to the raw camera capture
camera = PiCamera()
camera.resolution = tuple(conf["resolution"])
camera.framerate = conf["fps"]
rawCapture = PiRGBArray(camera, size=tuple(conf["resolution"]))

# allow the camera to warmup, then initialize the average frame, last
# uploaded timestamp, and frame motion counter
print("[INFO] warming up...")
time.sleep(conf["camera_warmup_time"])
avg = None
lastUploaded = datetime.datetime.now()
motionCounter = 0



img_array = []
# capture frames from the camera
for f in camera.capture_continuous(rawCapture, format="bgr", use_video_port=True):
    #ret, img = cap.read()
    # grab the raw NumPy array representing the image and initialize
    # the timestamp and occupied/unoccupied text
    frame = f.array
    timestamp = datetime.datetime.now()
    text = "Unoccupied"

    # resize the frame, convert it to grayscale, and blur it
    frame = imutils.resize(frame, width=500)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (21, 21), 0)

    # if the average frame is None, initialize it
    if avg is None:
        print("[INFO] starting background model...")
        avg = gray.copy().astype("float")
        rawCapture.truncate(0)
        continue

    # accumulate the weighted average between the current frame and
    # previous frames, then compute the difference between the current
    # frame and running average
    cv2.accumulateWeighted(gray, avg, 0.5)
    frameDelta = cv2.absdiff(gray, cv2.convertScaleAbs(avg))

    # threshold the delta image, dilate the thresholded image to fill
    # in holes, then find contours on thresholded image
    thresh = cv2.threshold(frameDelta, conf["delta_thresh"], 255,
        cv2.THRESH_BINARY)[1]
    thresh = cv2.dilate(thresh, None, iterations=2)
    cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)

    # loop over the contours
    for c in cnts:
        # if the contour is too small, ignore it
        if cv2.contourArea(c) < conf["min_area"]:
            continue

        # compute the bounding box for the contour, draw it on the frame,
        # and update the text
        (x, y, w, h) = cv2.boundingRect(c)
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        text = "Occupied"
        

    # draw the text and timestamp on the frame
    ts = timestamp.strftime("%A %d %B %Y %I:%M:%S%p")
    #print(time.strftime("%Y%m%d-%H%M%S"))
    cv2.putText(frame, "Room Status: {}".format(text), (10, 20),
        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
    cv2.putText(frame, ts, (10, frame.shape[0] - 10), cv2.FONT_HERSHEY_SIMPLEX,
        0.35, (0, 0, 255), 1)

    # check to see if the room is occupied
    if text == "Occupied":
        #out.write(frame)

        # check to see if enough time has passed between uploads
        if (timestamp - lastUploaded).seconds >= conf["min_upload_seconds"]:
            # increment the motion counter
            motionCounter += 1

            # check to see if the number of frames with consistent motion is
            # high enough
            if motionCounter >= conf["min_motion_frames"]:
                tName = time.strftime("%Y%m%d-%H%M%S.h264")
                camera.annotate_text = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                camera.start_recording(tName)
                #camera.start_preview()
                sleep(5)
                #camera.stop_preview()
                camera.stop_recording()
                os.system('python3 videoFaceDetection.py {0}'.format(tName))
                
              
                
                
                '''
                t = TempImage()
                img = cv2.imread(frame)
                out.write(frame)
                lastUploaded = timestamp
                motionCounter = 0
                
                rawCapture.truncate(0)
                camera.resolution = tuple(conf["resolution"])
                camera.framerate = conf["fps"]
                camera.start_recording('video.h264')
                #camera.start_preview()
                sleep(5)
                #camera.stop_preview()
                camera.stop_recording()
                
                rawCapture = PiRGBArray(camera, size=tuple(conf["resolution"]))
                '''
                # check to see if dropbox sohuld be used
                #if conf["use_dropbox"]:
                    # write the image to temporary file
                
                
                #t = TempImage()
                #img_array.append(frame)
                #cv2.imwrite(t.path, frame)
                lastUploaded = timestamp
                motionCounter = 0
                    
    else:
        motionCounter = 0

    # check to see if the frames should be displayed to screen
    if conf["show_video"]:
        # display the security feed
        cv2.imshow("Security Feed", frame)
        key = cv2.waitKey(1) & 0xFF
        for i in range(len(img_array)):
            out.write(img_array[i])
        # if the `q` key is pressed, break from the lop
        if key == ord("q"):
            break

    # clear the stream in preparation for the next frame
    rawCapture.truncate(0)
    
    
    
#cap.release()
#out.release()
cv2.destroyAllWindows()

'''
                    # upload the image to Dropbox and cleanup the tempory image
                    print("[UPLOAD] {}".format(ts))
                    path = "/{base_path}/{timestamp}.jpg".format(
                        base_path=conf["dropbox_base_path"], timestamp=ts)
                    client.files_upload(open(t.path, "rb").read(), path)
                    t.cleanup()
'''
                # update the last uploaded timestamp and reset the motion
                # counter
                

    # otherwise, the room is not occupied
    