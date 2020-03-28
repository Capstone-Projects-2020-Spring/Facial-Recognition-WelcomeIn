from django.http import HttpResponse, FileResponse
from django.core.files import File
from .models import FootageHandler, FriendlyFacesHandler
from django.views.decorators.csrf import csrf_exempt
import os
from django.contrib.auth.models import User
from rest_framework.response import Response

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
        file_key=None
        for file_key in sorted(request.FILES):
            pass

        FirendlyFacesHandlers = FriendlyFacesHandler()
        FirendlyFacesHandlers.FileField = request.FILES[file_key]
        FirendlyFacesHandlers.Name = request.POST['Name']

        try:
            FirendlyFacesHandlers.save()
        except:
            print("Error")

        return HttpResponse('Success')

    else:
        all_entries = FriendlyFacesHandler.objects.all()

        as_list = all_entries.values()

        image_data = open(all_entries[0].FileField.path, "rb").read()

        return HttpResponse(image_data, content_type="image/jpeg")

def update_profile(request, user_id):
    user = User.objects.get(pk=user_id)
    user.profile.PhoneNumber = '123-456-7890'
    user.save()