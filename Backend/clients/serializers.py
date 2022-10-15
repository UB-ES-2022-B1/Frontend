from rest_framework import serializers
from .models import Client
from passlib.hash import pbkdf2_sha256
from rest_framework.response import Response

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        # Definición de los campos a almacenar en la base de datos
        model = Client
        fields = ('pk', 'name', 'password', 'surname', 'email', 'phone', 'registrationDate', 'country', 'birthdate',
                  'failedLoginAttemps')


class ClientLoginSerializer(serializers.Serializer):
    # Campos que vamos a requerir
    mail = serializers.EmailField()
    password = serializers.CharField(min_length=6, max_length=64)

    # Primero validamos los datos
    def validate(self, data):

        # authenticate recibe las credenciales, si son válidas devuelve el objeto del usuario
        try:
            client = Client.objects.get(email=data['email'])
            # Guardamos el usuario en el contexto para posteriormente en create recuperar el token

            if pbkdf2_sha256.verify(data['password'], client.password):

                    if client.failedLoginAttemps >= 0 and client.failedLoginAttemps < 5:
                        client.reset_failed_logins()
                        return client
                    else:
                        return "User block!"
            else:
                client.increment_failed_login()
                return "Invalid password!"
        except:
            return "Invalid username"
