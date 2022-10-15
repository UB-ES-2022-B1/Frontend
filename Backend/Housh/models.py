from django.db import models

# Create your models here.

class Client(models.Model):
    name = models.CharField("Name", max_length=240)
    surname = models.CharField("Surname", max_length=240)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    country = models.CharField("Country",max_length=30)
    birthdate = models.DateField("Birth Date")
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name
