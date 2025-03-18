from django.contrib import admin
from .models import Usuario
from .models import Reservas
from .models import Herramientas
from .models import Aula
from .models import Laboratorio
from .models import EventoCalendario


admin.site.register(Usuario)
admin.site.register(Reservas)
admin.site.register(Herramientas)
admin.site.register(Aula)
admin.site.register(Laboratorio)
admin.site.register(EventoCalendario)

# Register your models here.
