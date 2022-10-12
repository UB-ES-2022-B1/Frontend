
from django.db import migrations
from passlib.hash import pbkdf2_sha256


def create_data(apps, schema_editor):
    Client = apps.get_model('clients', 'Client')
    hashed_password = pbkdf2_sha256.hash("ASD123")
    Client(name="Joe", surname='Silver', password=hashed_password,email="joe@email.com", phone="00000000",country='United Kingdom',birthdate='1995-03-23',failedLoginAttemps=0).save()
    Client(name="Alan", surname='Walker', password=hashed_password,email="alan@email.com", phone="13200000",country='United Kingdom',birthdate='1995-03-23',failedLoginAttemps=0).save()


class Migration(migrations.Migration):

    dependencies = [
        ('clients','0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
