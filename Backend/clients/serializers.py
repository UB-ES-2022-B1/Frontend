from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = ('pk','name','password', 'surname', 'email', 'phone','registrationDate', 'country','birthdate')
