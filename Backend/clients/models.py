from django.db import models

# Creación de la clase Cliente

class Client(models.Model):
    name = models.CharField("Name", max_length=30)
    password = models.CharField("Password",max_length=100)
    surname = models.CharField("Surname", max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    country = models.CharField("Country",max_length=30)
    birthdate = models.DateField("Birth Date")
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    failedLoginAttemps = models.IntegerField("Number of Failed logins",default=0)
    def __str__(self):
        return self.name
    #Método para cambiar la contraseña del usuario.
    def set_password(self,password):
        self.password = password

    def increment_failed_login(self):
        self.failedLoginAttemps += 1
    def reset_failed_logins(self):
        self.failedLoginAttemps = 0