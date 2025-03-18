# Generated by Django 4.2.2 on 2023-07-22 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_eventocalendario_calendario_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuario',
            name='user',
        ),
        migrations.AddField(
            model_name='usuario',
            name='apellido',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='usuario',
            name='contraseña',
            field=models.CharField(default='default_password', max_length=128),
        ),
        migrations.AddField(
            model_name='usuario',
            name='email',
            field=models.EmailField(default='default_email', max_length=254, unique=True),
        ),
        migrations.AddField(
            model_name='usuario',
            name='nombre',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='dni',
            field=models.CharField(default=11222333, max_length=10, unique=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='tipo',
            field=models.CharField(choices=[('prof', 'Prof'), ('alum', 'Alum')], max_length=10),
        ),
    ]
