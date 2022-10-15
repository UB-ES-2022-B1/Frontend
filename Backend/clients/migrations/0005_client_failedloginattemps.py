# Generated by Django 3.2.16 on 2022-10-12 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0004_clients'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='failedLoginAttemps',
            field=models.IntegerField(default=0, verbose_name='Number of Failed logins'),
            preserve_default=False,
        ),
    ]
