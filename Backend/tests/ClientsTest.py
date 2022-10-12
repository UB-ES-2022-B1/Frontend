from django.urls import reverse,path,include
from rest_framework import status
from rest_framework.test import APITestCase,URLPatternsTestCase
from django.test import Client as cl
from clients.models import Client
from clients.views import clients_list,client_detail

class ClientTests(APITestCase):

    def test_create_account(self):
        """
        Ensure we can create a new client object.
        """

        data = {'name': 'Lucas',
        'surname': 'Garcia',
        'password': 'ASD1235',
        'email': 'lgarcia@yahoo.com',
        'phone': '123091243',
        'country': 'Argentina',
        'birthdate': '1987-06-12'}

        response = self.client.post('http://localhost:8000/api/client/lgarcia@yahoo.com/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Client.objects.count(),3)
        self.assertEqual(Client.objects.get(name='Lucas').name, 'Lucas')

    def test_get_account_by_email(self):
        """
        Ensure we can create a new client object.
        """

        client = cl()

        response = client.get('http://localhost:8000/api/clients/')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
