from django.urls import path, include
from django.contrib import admin
from . import views
from django.contrib.auth.views import LoginView
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'ProfileView', views.ProfileView, 'Profiles')
# router.register(r'FriendlyFacesHandlerView', views.FriendlyFacesHandlerView, 'Friendly Faces')
# router.register(r'FootageHandlerView', views.FootageHandlerView, 'Footage')
# router.register(r'AlertsHandlerSerializer', views.AlertsHandlerSerializer, 'Alerts')

urlpatterns = [
    #path('', views.UpdateProfile, name='UpdateProfile'),
    path('', LoginView.as_view(), name='login'),
    #path('', include(router.urls))
]