# Generated by Django 2.2.7 on 2020-03-22 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AlertHandler',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Message', models.TextField()),
                ('MessageDate', models.DateTimeField(auto_now_add=True)),
                ('UserPhoneNumber', models.TextField(blank=True, max_length=50)),
                ('UserEmail', models.EmailField(max_length=254)),
                ('AlertImage', models.ImageField(upload_to='mediaLib/')),
                ('FootageLink', models.TextField()),
            ],
        ),
        migrations.AlterModelOptions(
            name='footagehandler',
            options={},
        ),
        migrations.AlterModelOptions(
            name='friendlyfaceshandler',
            options={},
        ),
    ]
