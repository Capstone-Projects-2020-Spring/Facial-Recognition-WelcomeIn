
import cv2
import sys

# Load the cascade
face_cascade = cv2.CascadeClassifier('Cascades/haarcascade_frontalface_default.xml')

# To capture video from webcam. 
#cap = cv2.VideoCapture(0)
# To use a video file as input 
cap = cv2.VideoCapture(sys.argv[1])
print(cap)
while True:
    

    
    # Read the frame
    ret, img = cap.read()
    if ret == True:
            
        # Convert to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        # Detect the faces
        faces = face_cascade.detectMultiScale(gray, 1.1, 4)
        # Draw the rectangle around each face
        for (x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)
            if h > 50:
                cv2.imwrite("testingBlueBox.png", img)
                
        # Display
        cv2.imshow('img', img)
        
        
        
        # Stop if escape key is pressed
        k = cv2.waitKey(30) & 0xff
        if k==27:
            break
    else:
        break
# Release the VideoCapture object
cap.release()
cv2.destroyAllWindows()