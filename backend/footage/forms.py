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
        fields = ['PhoneNumber', ]



    #     def CreateUserView(request):
    # if request.method == 'POST':
    #     user_form = UserForm(request.POST)
    #     profile_form = ProfileForm(request.POST)
    #     if user_form.is_valid():
    #         user_form.save()
    #     if profile_form.is_valid():
    #         profile_form.save()
    # else:
    #     user_form = UserForm()
    #     profile_form = ProfileForm()
    # return render(request, 'registration/create_user.html', {'user_form': user_form, 'profile_form': profile_form})
