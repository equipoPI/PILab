from django.db import models
from django.conf import settings
from django.utils import timezone


# Create your models here.
class Usuario(models.Model):
    email = models.EmailField(unique=True)
    contraseña = models.CharField(max_length=128)
    nombre = models.CharField(max_length=100, null=False , default='')  # Cambio realizado: added related_name
    apellido = models.CharField(max_length=100, null=False , default='')  # Cambio realizado: added related_name
    dni = models.CharField(max_length=10, unique=True, null=False, default=11222333)
    
    TIPOS = [
        ('prof', 'Prof'),
        ('alum', 'Alum'),
        ('admi', 'Admi'),
    ]

    tipo = models.CharField(max_length=10,choices=TIPOS)

    def __str__(self):
        return f"Nombre: {self.nombre}, Apellido: {self.apellido}"

    def Valida_Res_Al(self):
        if self.tipo == 'prof':
            # Lógica específica para profesores
            # ...
            pass
        return self
    
    def Editar_dis(self):
        if self.tipo == 'admi':
            # Lógica específica para profesores
            # ...
            pass
        return self

    def Editar_caract(self):
        if self.tipo == 'admi':
            # Lógica específica para profesores
            # ...
            pass
        return self

    def Editar_user(self):
        if self.tipo == 'admi':
            # Lógica específica para profesores
            # ...
            pass
        return self

    def Eliminar_objt(self):
        if self.tipo == 'admi':
            # Lógica específica para profesores
            # ...
            pass
        return self

    def reservar(self):
        return self
      
    def IniciarSesión(self):
        return self
      
    def consultar(self):
        return self
      
    def cancelar(self):
        return self
    

class Post(models.Model):
    author = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
    

class Herramientas(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    cantidad = models.IntegerField(default=0)
    
    def __str__(self):
        return f"Nombre: {self.nombre}, Cantidad: {self.cantidad}"


class Laboratorio(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(max_length=600, null=True)
    capacidad = models.IntegerField()
    ubicacion = models.CharField(max_length=200)
    equipamiento = models.CharField(max_length=200)
    
    def __str__(self):
        return f"Nombre: {self.nombre}, Ubicacion: {self.ubicacion}"



class Aula(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(max_length=600, null=True)
    capacidad = models.IntegerField()
    ubicacion = models.CharField(max_length=200)
    equipamiento = models.CharField(max_length=200)

    def __str__(self):
        return f"Nombre: {self.nombre}, Ubicacion: {self.ubicacion}"


class Reservas(models.Model):
    Autor = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    laboratorio = models.ForeignKey(Laboratorio, on_delete=models.CASCADE, null=True, blank=True)
    aula = models.ForeignKey(Aula, on_delete=models.CASCADE, null=True, blank=True)
    herramienta = models.ForeignKey(Herramientas, on_delete=models.CASCADE, null=True, blank=True)
    fechas = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return f"Autor: {self.Autor}, Fecha: {self.published_date}"

# Create your models here.
