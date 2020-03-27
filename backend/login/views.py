from django.contrib.auth.models import User
from rest_framework import viewsets
from login.serializers import UserSerializer, ProfileSerializer, FriendlyFacesHandlerSerializer, FootageHandlerSerializer, AlertsHandlerSerializer
from login.models import Profile, FriendlyFacesHandler, FootageHandler, AlertHandler
#from login.forms import UserForm, ProfileForm
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.db import transaction
from django.contrib.auth import authenticate, login

# @login_required
# @transaction.atomic
# def UpdateProfile(request):
#     if request.method == 'POST':
#         user_form = UserForm(request.POST, instance=request.user)
#         profile_form = ProfileForm(request.POST, instance=request.user.profile)
#         if user_form.is_valid() and profile_form.is_valid():
#             user_form.save()
#             profile_form.save()
#             messages.success(request, _('Your profile was successfully updated!'))
#             return redirect('settings:profile')
#         else:
#             messages.error(request, _('Please correct the error below.'))
#     else:
#         user_form = UserForm(instance=request.user)
#         profile_form = ProfileForm(instance=request.user.profile)
#     return render(request, 'profiles/profile.html', {
#         'user_form': user_form,
#         'profile_form': profile_form
#     })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class ProfileView(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class FriendlyFacesHandlerView(viewsets.ModelViewSet):
    queryset = FriendlyFacesHandler.objects.all()
    serializer_class = FriendlyFacesHandlerSerializer

class FootageHandlerView(viewsets.ModelViewSet):
    queryset = FootageHandler.objects.all()
    serializer_class = FootageHandlerSerializer

class AlertHandlerView(viewsets.ModelViewSet):
    queryset = AlertHandler.objects.all()
    serializer_class = AlertsHandlerSerializer

