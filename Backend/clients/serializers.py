from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        #Definición de los campos a almacenar en la base de datos
        model = Client
        fields = ('pk','name','password', 'surname', 'email', 'phone','registrationDate', 'country','birthdate')
