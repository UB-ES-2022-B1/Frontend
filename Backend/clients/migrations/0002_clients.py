
from django.db import migrations

def create_data(apps, schema_editor):
    Client = apps.get_model('clients', 'Client')
    Client(name="Joe", surname='Silver', email="joe@email.com", phone="00000000",country='United Kingdom',birthdate='1995-03-23').save()


class Migration(migrations.Migration):

    dependencies = [
        ('clients','0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
