from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    PhoneNumber = models.CharField(max_length=50, blank=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class FootageHandler(models.Model):
    FileField = models.FileField(upload_to='mediaLib/')
    FileDate = models.DateTimeField(auto_now_add=True)
    FileDescriptor = models.CharField(max_length=100, blank=True)

class FriendlyFacesHandler(models.Model):
    FileField = models.FileField(upload_to='FriendlyFaces/')
    Name = models.CharField(max_length=100, blank=True)

<<<<<<< HEAD
class AlertHandler(models.Model):
    Message = models.CharField(max_length=100)
    MessageType = models.CharField(max_length=100)
    MessageDate = models.DateTimeField(auto_now_add=True)
    UserPhoneNumber = models.CharField(max_length=50, blank=True) #from user table
    UserEmail = models.EmailField(blank=False) #from user table
    AlertImage = models.ImageField(upload_to='mediaLib/')
=======
class AccessHistoryHandler(models.Model):
    FileField = models.FileField(upload_to='AccessFaces/')
    UpladTime = models.DateTimeField(auto_now_add=True)
>>>>>>> 38f7fae6a221a1e634af09cf370f6ccbb6f6cdc8
