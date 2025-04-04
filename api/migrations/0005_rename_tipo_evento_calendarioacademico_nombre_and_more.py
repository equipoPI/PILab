# Generated by Django 4.2.2 on 2023-07-22 15:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_calendarioacademico_fecha_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='calendarioacademico',
            old_name='tipo_evento',
            new_name='nombre',
        ),
        migrations.RenameField(
            model_name='reservas',
            old_name='published_date',
            new_name='fecha_cancelacion',
        ),
        migrations.RemoveField(
            model_name='calendarioacademico',
            name='hora_finalizacion',
        ),
        migrations.RemoveField(
            model_name='calendarioacademico',
            name='hora_inicio',
        ),
        migrations.RemoveField(
            model_name='reservas',
            name='fechas',
        ),
        migrations.AddField(
            model_name='reservas',
            name='estado',
            field=models.CharField(choices=[('confirmada', 'Confirmada'), ('en_espera', 'En espera'), ('cancelada', 'Cancelada')], default='en_espera', max_length=20),
        ),
        migrations.AddField(
            model_name='reservas',
            name='fecha',
            field=models.DateField(default=None),
        ),
        migrations.AddField(
            model_name='reservas',
            name='hora_finalizacion',
            field=models.TimeField(default=None),
        ),
        migrations.AddField(
            model_name='reservas',
            name='hora_inicio',
            field=models.TimeField(default=None),
        ),
        migrations.CreateModel(
            name='EventoCalendario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_inicio', models.DateField()),
                ('fecha_finalizacion', models.DateField()),
                ('hora_inicio', models.TimeField()),
                ('hora_finalizacion', models.TimeField()),
                ('tipo_evento', models.CharField(max_length=100)),
                ('aula', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.aula')),
                ('calendario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.calendarioacademico')),
                ('laboratorio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.laboratorio')),
            ],
        ),
    ]
