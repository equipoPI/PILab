from django.db import models
from django.conf import settings
from django.utils import timezone
from django.core.mail import send_mail


class Usuario(models.Model):
    email = models.EmailField(unique=True, default='default_email')
    contraseña = models.CharField(max_length=128, null=False, default='default_password')
    nombre = models.CharField(max_length=100, null=False , default='')  # Cambio realizado: added related_name
    apellido = models.CharField(max_length=100, null=False , default='')  # Cambio realizado: added related_name
    dni = models.CharField(max_length=10, unique=True, null=False, default=11222333)

    TIPOS = [
        ('prof', 'Prof'),
        ('alum', 'Alum'),
    ]

    tipo = models.CharField(max_length=10, choices=TIPOS)

    def __str__(self):
        return f"Usuario: {self.user.username if self.user else 'Sin usuario'}, Tipo: {self.tipo}"

    def reservar(self):
        return self


class Herramientas(models.Model):
    institucion = models.CharField(max_length=100, null=False, default='')
    ubicacion = models.CharField(max_length=100, null=False, default='')
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    cantidad = models.IntegerField(default=0)

    disponibilidad = models.BooleanField(default=True)

    def actualizar_disponibilidad(self):
        reservas = Reservas.objects.filter(herramienta=self, fechas__gte=timezone.now())
        self.disponibilidad = not reservas.exists()
        self.save()

    def __str__(self):
        return f"Herramienta: {self.nombre}, Cantidad: {self.cantidad}"


class Laboratorio(models.Model):
    institucion = models.CharField(max_length=100, null=False, default='')
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(max_length=600, null=True)
    capacidad = models.IntegerField()
    ubicacion = models.CharField(max_length=100, null=False, default='')
    equipamiento = models.CharField(max_length=200)

    disponibilidad = models.BooleanField(default=True)

    def actualizar_disponibilidad(self):
        eventos = EventoCalendario.objects.filter(laboratorio=self)
        reservas = Reservas.objects.filter(laboratorio=self, fechas__gte=timezone.now(), estado='confirmada')

        for evento in eventos:
            if evento.fecha_inicio <= timezone.now().date() <= evento.fecha_finalizacion:
                self.disponibilidad = False
                return

        for reserva in reservas:
            if reserva.estado == 'confirmada':
                self.disponibilidad = False
                return

        self.disponibilidad = True
        self.save()

    def __str__(self):
        return f"Nombre: {self.nombre}, Ubicacion: {self.ubicacion}"


class Aula(models.Model):
    institucion = models.CharField(max_length=100, null=False, default='')
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(max_length=600, null=True)
    capacidad = models.IntegerField()
    ubicacion = models.CharField(max_length=100, null=False, default='')
    equipamiento = models.CharField(max_length=200)

    disponibilidad = models.BooleanField(default=True)

    def actualizar_disponibilidad(self):
        eventos = EventoCalendario.objects.filter(aula=self)
        reservas = Reservas.objects.filter(aula=self, fechas__gte=timezone.now(), estado='confirmada')

        for evento in eventos:
            if evento.fecha_inicio <= timezone.now().date() <= evento.fecha_finalizacion:
                self.disponibilidad = False
                return

        for reserva in reservas:
            if reserva.estado == 'confirmada':
                self.disponibilidad = False
                return

        self.disponibilidad = True
        self.save()

    def __str__(self):
        return f"Nombre: {self.nombre}, Ubicacion: {self.ubicacion}"


class Reservas(models.Model):
    ESTADOS = [
        ('confirmada', 'Confirmada'),
        ('en_espera', 'En espera'),
        ('cancelada', 'Cancelada'),
    ]

    Autor = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    laboratorio = models.ForeignKey(Laboratorio, on_delete=models.CASCADE, null=True, blank=True)
    aula = models.ForeignKey(Aula, on_delete=models.CASCADE, null=True, blank=True)
    herramienta = models.ForeignKey(Herramientas, on_delete=models.CASCADE, null=True, blank=True)
    fecha = models.DateField(default=None)
    hora_inicio = models.TimeField(default=None)
    hora_finalizacion = models.TimeField(default=None)
    estado = models.CharField(max_length=20, choices=ESTADOS, default='en_espera')
    fecha_cancelacion = models.DateTimeField(null=True, blank=True)

    def publish(self):
        evento_aula = EventoCalendario.objects.filter(aula=self.aula, fecha_inicio=self.fecha,
                                                      hora_inicio=self.hora_inicio,
                                                      hora_finalizacion=self.hora_finalizacion).first()
        evento_laboratorio = EventoCalendario.objects.filter(laboratorio=self.laboratorio, fecha_inicio=self.fecha,
                                                             hora_inicio=self.hora_inicio,
                                                             hora_finalizacion=self.hora_finalizacion).first()

        reserva_activa = Reservas.objects.filter(fecha=self.fecha, hora_inicio=self.hora_inicio,
                                                 hora_finalizacion=self.hora_finalizacion, estado='confirmada').exclude(
            id=self.id).first()

        if not evento_aula and not evento_laboratorio and not reserva_activa:
            self.estado = 'confirmada'
            self.save()
            self.actualizar_disponibilidad_aula_laboratorio()
            self.enviar_notificacion_confirmacion()
        else:
            self.estado = 'en_espera'
            self.save()
            self.verificar_lista_espera()

    def actualizar_disponibilidad_aula_laboratorio(self):
        if self.laboratorio:
            self.laboratorio.actualizar_disponibilidad()
        if self.aula:
            self.aula.actualizar_disponibilidad()

    def cancelar(self):
        self.estado = 'cancelada'
        self.fecha_cancelacion = timezone.now()
        self.save()
        self.actualizar_disponibilidad_aula_laboratorio()
        self.enviar_notificacion_cancelacion()

    def enviar_notificacion_confirmacion(self):
        subject = 'Confirmación de reserva'
        message = 'Su reserva ha sido confirmada.'
        sender = 'noreply@example.com'
        recipient = self.Autor.user.email if self.Autor.user else ''

        send_mail(subject, message, sender, [recipient])

    def verificar_lista_espera(self):
        reservas_en_espera = Reservas.objects.filter(aula=self.aula, laboratorio=self.laboratorio,
                                                     fecha=self.fecha, hora_inicio=self.hora_inicio,
                                                     hora_finalizacion=self.hora_finalizacion, estado='en_espera')
        if reservas_en_espera.exists():
            reserva_siguiente = reservas_en_espera.first()
            reserva_siguiente.estado = 'confirmada'
            reserva_siguiente.save()
            reserva_siguiente.enviar_notificacion_confirmacion()

    def enviar_notificacion_cancelacion(self):
        subject = 'Cancelación de reserva'
        message = 'Su reserva ha sido cancelada.'
        sender = 'noreply@example.com'
        recipient = self.Autor.user.email if self.Autor.user else ''

        send_mail(subject, message, sender, [recipient])

    def __str__(self):
        return f"Autor: {self.Autor.user.username if self.Autor.user else 'Sin usuario'}, Fecha: {self.fecha}, Hora inicio: {self.hora_inicio}, Hora finalización: {self.hora_finalizacion}, Estado: {self.estado}"


class EventoCalendario(models.Model):
    aula = models.ForeignKey(Aula, on_delete=models.CASCADE, null=True, blank=True)
    laboratorio = models.ForeignKey(Laboratorio, on_delete=models.CASCADE, null=True, blank=True)
    fecha_inicio = models.DateField()
    fecha_finalizacion = models.DateField()
    hora_inicio = models.TimeField()
    hora_finalizacion = models.TimeField()
    tipo_evento = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        reservas = Reservas.objects.filter(Q(aula=self.aula) | Q(laboratorio=self.laboratorio),
                                           fecha__range=[self.fecha_inicio, self.fecha_finalizacion],
                                           hora_inicio__range=[self.hora_inicio, self.hora_finalizacion],
                                           estado='confirmada')
        if reservas.exists():
            raise ValueError("Ya existe una reserva confirmada para este lugar y horario.")

        super(EventoCalendario, self).save(*args, **kwargs)

    def __str__(self):
        return f"Evento: {self.tipo_evento}, Fecha inicio: {self.fecha_inicio}, Fecha finalización: {self.fecha_finalizacion}, Hora inicio: {self.hora_inicio}, Hora finalización: {self.hora_finalizacion}, Apatado:{self.aula}{self.laboratorio},"
