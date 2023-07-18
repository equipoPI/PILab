from django.contrib import admin
from .models import Usuario
from .models import Reservas
from .models import Herramientas
from .models import Aula
from .models import Laboratorio
from .models import CalendarioAcademico
from .models import Notificacion
from .models import Prioridad

admin.site.register(Usuario)
admin.site.register(Reservas)
admin.site.register(Herramientas)
admin.site.register(Aula)
admin.site.register(Laboratorio)
admin.site.register(CalendarioAcademico)
admin.site.register(Notificacion)
admin.site.register(Prioridad)
# Register your models here.
