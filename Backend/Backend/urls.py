"""Backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))


"""
from django.contrib import admin
from django.urls import path
from django.urls import re_path
from clients import views
urlpatterns = [

    #Ruta de administración de Django, quitar en producción
    #api/clients devuelve el listado completo de clientes
    #api/clients/id devuelve los datos de un solo cliente
    #api/client/mail recupera la información de un cliente via mail
    path('admin/', admin.site.urls),
    re_path(r'^api/clients/$', views.clients_list),
    re_path(r'^api/clients/([0-9])$', views.clients_detail),
    re_path(r'^api/client/(?P<mail>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})/$',views.client_detail,name="mail"),
]
