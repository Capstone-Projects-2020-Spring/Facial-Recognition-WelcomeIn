from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    PhoneNumber = models.TextField(max_length=50, blank=True)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class FriendlyFacesHandler(models.Model):
    AutoUnlock = models.FileField(upload_to='FriendlyFaces/')
    Name = models.CharField(max_length=100, blank=True)
    AutoUnlock = models.BooleanField(default= False)

class FootageHandler(models.Model):
    FileField = models.FileField(upload_to='mediaLib/')
    FileDate = models.DateTimeField(auto_now_add=True)
    FileDescriptor = models.CharField(max_length=100, blank=True)
    
class AlertHandler(models.Model):
    Message = models.TextField(blank=False)
    MessageDate = models.DateTimeField(auto_now_add=True)
    UserPhoneNumber = models.TextField(max_length=50, blank=True) #from user table
    UserEmail = models.EmailField(blank=False) #from user table
    AlertImage = models.ImageField(upload_to='mediaLib/')
    

