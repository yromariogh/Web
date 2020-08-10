from django.db import models

class tipodocumento(models.Model):
    idTipo = models.IntegerField(max_length=10)
    nombre = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=100)
    def __str__ (self):
        return self.nombre
    
class ciudad(models.Model):
    idCiudad = models.IntegerField(max_length=10)
    nombre = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=100)
    def __str__ (self):
        return self.nombre
    
class persona(models.Model):
    idPersona = models.IntegerField(max_length=10)
    nombres = models.CharField(max_length=30)
    apellidos = models.CharField(max_length=30)
    tipodocumento = models.ForeignKey(tipodocumento, on_delete=models.CASCADE)
    documento = models.IntegerField(max_length=9)
    lugarresidencia = models.ForeignKey(ciudad, on_delete=models.CASCADE)
    fechanacimiento = models.DateField(null=True, blank=True)
    email = models.CharField(max_length=30)
    telefono = models.IntegerField(max_length=10)
    usuario = models.CharField(max_length=20)
    password =  models.CharField(max_length=15)
    def __str__ (self):
        return 'Nombres y apellidos: ' + self.nombres + ' ' + self.apellidos
    
# Create your models here.
