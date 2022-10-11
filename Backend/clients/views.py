# Create your views here.

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import parsers
from passlib.hash import pbkdf2_sha256


from .models import Client
from .serializers import *

#Endpoint para detalles de un cliente
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

            serializer = ClientSerializer(data=request.data)
            if serializer.is_valid():
                instance = serializer.save()
                instance.set_password(pbkdf2_sha256.hash(request.data['password']))
                instance.save()
                return Response(status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def clients_list(request):
    if request.method == 'GET':
        data = Client.objects.all()

        serializer = ClientSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)



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