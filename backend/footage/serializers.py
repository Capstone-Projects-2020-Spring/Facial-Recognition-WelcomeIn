from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, FriendlyFacesHandler, FootageHandler, AlertHandler


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        fields = ['PhoneNumber']

class FriendlyFacesHandlerSerializer(serializers.ModelSerializer):

    class Meta:
        model = FriendlyFacesHandler
        fields = ['id', 'name','encoding','image','auto_unlock']

class FootageHandlerSerializer(serializers.ModelSerializer):

    class Meta:
        model = FootageHandler
        fields = ['AutoUnlock','Name', 'AutoUnlock']

class AlertsHandlerSerializer(serializers.ModelSerializer):

    class Meta:
        model = AlertHandler
        fields = ['Message','MessageDate', 'UserPhoneNumber', 'UserEmail', 'AlertImage']