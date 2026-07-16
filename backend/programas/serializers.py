from rest_framework import serializers
from .models import Programa

class ProgramaSerializer(serializers.ModelSerializer):
    """
    serializer para el modelo Prorama.
    convierte los programas institucionales a formato json  para que React pueda mostrarlos en la aplicacion 
    """

    nombre_display = serializers.CharField(
        source = 'get_nombre_display',
        read_only = True
    )

    class Meta:
        model = Programa
        fields = [
            'id',
            'nombre',
            'nombre_display',
            'descripcion',
            'imagen',
            'activo',
            'fecha_creacion',
            'fecha_actualizacion',
        ]

        read_only_fields = ['id', 'fecha_creacion', 'fecha_actualizacion']