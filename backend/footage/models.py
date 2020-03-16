from django.db import models

# Create your models here.

class FootageHandler(models.Model):
    FileField = models.FileField(upload_to='mediaLib/')
    FileDate = models.DateTimeField(auto_now_add=True)
    FileDescriptor = models.CharField(max_length=100, blank=True)