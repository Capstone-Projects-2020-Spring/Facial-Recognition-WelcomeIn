from django.http import HttpResponse, FileResponse
from django.core.files import File
from .models import FootageHandler
from django.views.decorators.csrf import csrf_exempt
import os

@csrf_exempt
def FootageHandlerFormView(request):
    if request.method == 'POST':
        
        file_key=None
        for file_key in sorted(request.FILES):
            pass

        wrapped_file = ImageFile(request.FILES[file_key])
        filename = wrapped_file.name


        FootageHandlers = FootageHandler()
        FootageHandlers.FileField = request.FILES[file_key]
        FootageHandlers.FileDescriptor = filename

        try:
            FootageHandlers.save()
        except:
            print('Error')

        return HttpResponse('Success')
    
    else:
        all_entries = FootageHandler.objects.all()
        #print(all_entries)

        print(os.getcwd())
        image_data = open(os.getcwd() + all_entries[0].FileField.url, "rb").read()
        print(image_data)

        return FileResponse(open(os.getcwd() + all_entries[0].FileField.url, "rb"))


