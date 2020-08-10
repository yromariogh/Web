# Generated by Django 3.1 on 2020-08-10 21:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ciudad',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idCiudad', models.IntegerField(max_length=10)),
                ('nombre', models.CharField(max_length=30)),
                ('descripcion', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='tipodocumento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idTipo', models.IntegerField(max_length=10)),
                ('nombre', models.CharField(max_length=30)),
                ('descripcion', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='persona',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idPersona', models.IntegerField(max_length=10)),
                ('nombres', models.CharField(max_length=30)),
                ('apellidos', models.CharField(max_length=30)),
                ('documento', models.IntegerField(max_length=9)),
                ('fechanacimiento', models.DateField(blank=True, null=True)),
                ('email', models.CharField(max_length=30)),
                ('telefono', models.IntegerField(max_length=10)),
                ('usuario', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=15)),
                ('lugarresidencia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='taller.ciudad')),
                ('tipodocumento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='taller.tipodocumento')),
            ],
        ),
    ]
