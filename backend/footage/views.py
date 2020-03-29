from django.http import HttpResponse, FileResponse
from django.core.files import File
<<<<<<< HEAD
from django.shortcuts import render
from .models import FootageHandler, FriendlyFacesHandler
from .forms import UserForm, ProfileForm
from django.views.decorators.csrf import csrf_exempt
import os
from django.contrib.auth.models import User
from rest_framework.response import Response
=======
from .models import FootageHandler, FriendlyFacesHandler, AccessHistoryHandler
from django.views.decorators.csrf import csrf_exempt
import os
import json
import face_recognition
import numpy as np
>>>>>>> 38f7fae6a221a1e634af09cf370f6ccbb6f6cdc8

@csrf_exempt
def FootageHandlerFormView(request):
    #FootageHandler.objects.all().delete()
    if request.method == 'POST':
        
        file_key=None
        for file_key in sorted(request.FILES):
            pass
        '''
        wrapped_file = ImageFile(request.FILES[file_key])
        filename = wrapped_file.name
        '''

        FootageHandlers = FootageHandler()
        FootageHandlers.FileField = request.FILES[file_key]
        FootageHandlers.FileDescriptor = request.POST['FileDescriptor']

        try:
            FootageHandlers.save()
        except:
            print('Error')

        return HttpResponse('Success')
    
    else:
        all_entries = FootageHandler.objects.all()
        #all_entries = FootageHandler.objects.all().delete()
        #print(all_entries)
        '''
        print(os.getcwd())
        image_data = open(os.getcwd() + all_entries[0].FileField.url, "rb").read()
        print(image_data)
        '''
        return FileResponse(open(os.getcwd() + all_entries[len(all_entries)-1].FileField.url, "rb"))

        #return HttpResponse('Deleted')

@csrf_exempt
def FriendlyFacesHandlerFormView(request):
    if request.method == 'POST':

        FirendlyFacesHandlers = FriendlyFacesHandler()
        FirendlyFacesHandlers.FileField = request.FILES.get("FileField")
        FirendlyFacesHandlers.Name = request.POST.get('Name')

        print(FirendlyFacesHandlers.FileField)

        try:
            FirendlyFacesHandlers.save()
        except:
            print(FirendlyFacesHandlers.FileField)
            print("Error")

        return HttpResponse('Success')

    else:

        ##FriendlyFacesHandler.objects.all().delete()

        all_entries = FriendlyFacesHandler.objects.all()

        as_list = all_entries.values()

        image_data = open(all_entries[0].FileField.path, "rb").read()

        return_json = []
        
        for x in all_entries:
            print(all_entries)
            return_json.append({"Image": "http://10.0.0.142" + x.FileField.path.replace('/var/www/html', ''), "Name": x.Name})

        return_obj = json.dumps(return_json)

        return HttpResponse(return_obj)

@csrf_exempt
def VerifyAccess(request):
    if request.method == 'POST':
        picture_to_verify = request.FILES.get('CheckAccessImage')
        friendly_faces_query = FriendlyFacesHandler.objects.all()
        KnownAccessList = []
        for items in friendly_faces_query:
            image_loaded = face_recognition.load_image_file("/var/www/html/facial-recognition-application/sean.droke/FacialRecognitionRepo/backend" + items.FileField.url)
            image_encoded = face_recognition.face_encodings(image_loaded)[0]
            KnownAccessList.append(image_encoded)

        AccessAttempt = AccessHistoryHandler()
        AccessAttempt.FileField = picture_to_verify
        AccessAttempt.save()

        KnownAccessList = np.asarray(KnownAccessList, dtype=np.float32)

        load_attempted = face_recognition.load_image_file("/var/www/html/facial-recognition-application/sean.droke/FacialRecognitionRepo/backend" + AccessAttempt.FileField.url)
        enconded_attempted = face_recognition.face_encodings(load_attempted)
        
        result = face_recognition.compare_faces(KnownAccessList, enconded_attempted)

        if(True in result):
            return HttpResponse("Access Granted")
        else:
            return HttpResponse("Access Denied")

def UpdateProfile(request, user_id):
    user = User.objects.get(pk=user_id)
    user.profile.PhoneNumber = '123-456-7890'
    user.save()

def CreateUserView(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        profile_form = ProfileForm(request.POST)
        if form.is_valid():
            form.save()
        if profile_form.is_valid():
                profile_form.save()
    else:
        form = UserForm()
        profile_form = ProfileForm()
    return render(request, 'registration/create_user.html', {'form': form, 'profile_form': profile_form})
