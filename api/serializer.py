from rest_framework import serializers
from .models import Usuario
from .models import Reservas
from .models import Herramientas
from .models import Aula
from .models import Laboratorio

class UsuarioSerializers(serializers.ModelSerializer):
    class Meta:
        model=Usuario
        fields='__all__'

class ReservasSerializers(serializers.ModelSerializer):
    class Meta:
        model=Reservas
        fields='__all__'

class HerramientasSerializers(serializers.ModelSerializer):
    class Meta:
        model=Herramientas
        fields='__all__'

class AulaSerializers(serializers.ModelSerializer):
    class Meta:
        model=Aula
        fields='__all__'

class LaboratorioSerializers(serializers.ModelSerializer):
    class Meta:
        model=Laboratorio
        fields='__all__'
