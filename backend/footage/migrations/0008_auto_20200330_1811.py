# Generated by Django 2.2.7 on 2020-03-30 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('footage', '0007_accesshistoryhandler'),
    ]

    operations = [
        migrations.AddField(
            model_name='friendlyfaceshandler',
            name='AutoUnlock',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='profile',
            name='GetFriendlyAlerts',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='profile',
            name='GetStrangerAlerts',
            field=models.BooleanField(default=False),
        ),
    ]
