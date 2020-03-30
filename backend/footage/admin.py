from django.contrib import admin
from .models import FootageHandler, FriendlyFacesHandler, Profile, AlertHandler

admin.site.register(FootageHandler)
admin.site.register(FriendlyFacesHandler)
admin.site.register(Profile)
admin.site.register(AlertHandler)