from django import forms
from .models import FootageHandler, Profile
from django.contrib.auth.models import User

class FootageHandlerForm(forms.ModelForm):
    class Meta:
        model = FootageHandler
        fields = ('FileField', 'FileDescriptor', )

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', ]

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['PhoneNumber', 'GetStrangerAlerts', 'GetFriendlyAlerts', ]
