from rest_framework import viewsets
from .serializer import UsuarioSerializers
from .models import Usuario
from .serializer import ReservasSerializers
from .models import Reservas
from .serializer import HerramientasSerializers
from .models import Herramientas
from .serializer import AulaSerializers
from .models import Aula
from .serializer import LaboratorioSerializers
from .models import Laboratorio
from .serializer import CalendarioAcademicoSerializers
from .models import CalendarioAcademico
from .serializer import NotificacionSerializers
from .models import Notificacion
from .serializer import PrioridadSerializers
from .models import Prioridad

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset= Usuario.objects.all()
    serializer_class=UsuarioSerializers

class ReservasViewSet(viewsets.ModelViewSet):
    queryset= Reservas.objects.all()
    serializer_class=ReservasSerializers

class HerramientasViewSet(viewsets.ModelViewSet):
    queryset= Herramientas.objects.all()
    serializer_class=HerramientasSerializers

class AulaViewSet(viewsets.ModelViewSet):
    queryset= Aula.objects.all()
    serializer_class=AulaSerializers
    
class LaboratorioViewSet(viewsets.ModelViewSet):
    queryset= Laboratorio.objects.all()
    serializer_class=LaboratorioSerializers

class CalendarioAcademicoViewSet(viewsets.ModelViewSet):
    queryset= CalendarioAcademico.objects.all()
    serializer_class=CalendarioAcademicoSerializers

class NotificacionViewSet(viewsets.ModelViewSet):
    queryset= Notificacion.objects.all()
    serializer_class=NotificacionSerializers

class PrioridadViewSet(viewsets.ModelViewSet):
    queryset= Prioridad.objects.all()
    serializer_class=PrioridadSerializers
# Create your views here.
