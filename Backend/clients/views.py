# Create your views here.

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import parsers
from passlib.hash import pbkdf2_sha256
import jwt,json

from lock import lock
from .models import Client
from .serializers import *

#Endpoint para agregar un nuevo cliente y obtener la información de este vía mail
@api_view(['GET', 'POST'])
def client_detail(request,mail):

    if request.method == 'GET':
        try:
            data = Client.objects.get(email=mail)
            serializer = ClientSerializer(data, context={'request': request}, many=False)
            return Response(serializer.data)

        except Client.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':

        try:
            data = Client.objects.get(email=mail)
            return Response(status=status.HTTP_409_CONFLICT)
        except Client.DoesNotExist:
            with lock.lock:
                serializer = ClientSerializer(data=request.data)
                if serializer.is_valid():
                    instance = serializer.save()
                    instance.set_password(pbkdf2_sha256.hash(request.data['password']))
                    instance.save()
                    return Response(status=status.HTTP_201_CREATED)

                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Endpoint para obtener la lista de clientes.
@api_view(['GET'])
def clients_list(request):
    if request.method == 'GET':
        data = Client.objects.all()

        serializer = ClientSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)


#Endpoint para actualizar la información de un cliente o borrarlo.
@api_view(['PUT', 'DELETE'])
def clients_detail(request, pk):
    try:
        client = Client.objects.get(pk=pk)
    except Client.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ClientSerializer(client, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def login(request):
    serializer = ClientLoginSerializer(data=request.data)
    client = serializer.validate(request.data)
    if client == "Invalid password!":
        return Response(status=status.HTTP_400_BAD_REQUEST)
    if client == "Invalid username/password":
        return Response(status=status.HTTP_404_NOT_FOUND)

    payload = {
        'email': client.email,
        'name': client.name,
        'surname': client.surname,
    }
    jwt_token = {'token': jwt.encode(payload, "XiqX28pxavz8SYivUlLxeIg495zSxNMlP7djRjPLEGxCIrxiMU")}
    return Response(json.dumps(jwt_token))






