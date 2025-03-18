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
from .serializer import EventoCalendarioSerializers
from .models import EventoCalendario

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

class EventoCalendarioViewSet(viewsets.ModelViewSet):
    queryset= EventoCalendario.objects.all()
    serializer_class=EventoCalendarioSerializers
# Create your views here.
