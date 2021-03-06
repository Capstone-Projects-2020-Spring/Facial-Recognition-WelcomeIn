# Generated by Django 2.2.7 on 2020-03-28 18:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('footage', '0005_merge_20200325_2330'),
    ]

    operations = [
        migrations.CreateModel(
            name='AlertHandler',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Message', models.CharField(max_length=100)),
                ('MessageType', models.CharField(max_length=100)),
                ('MessageDate', models.DateTimeField(auto_now_add=True)),
                ('UserPhoneNumber', models.CharField(blank=True, max_length=50)),
                ('UserEmail', models.EmailField(max_length=254)),
                ('AlertImage', models.ImageField(upload_to='mediaLib/')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('PhoneNumber', models.CharField(blank=True, max_length=50)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
