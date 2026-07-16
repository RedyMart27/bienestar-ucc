from rest_framework import serializers
from .models import ContenidoInformativo
from programas.serializers import ProgramaSerializer


class ContenidoInformativoSerializer(serializers.ModelSerializer):
    """
    Serializer para el modelo ContenidoInformativo.
    Convierte las noticias, servicios y rutas de atención
    a formato JSON para que React pueda mostrarlos.
    """
    programa_detalle = ProgramaSerializer(
        source='programa',
        read_only=True
    )

    
    tipo_display = serializers.CharField(
        source='get_tipo_display',
        read_only=True
    )

    class Meta:
        model = ContenidoInformativo
        fields = [
            'id',
            'titulo',
            'contenido',
            'tipo',
            'tipo_display',
            'programa',
            'programa_detalle',
            'imagen',
            'activo',
            'destacado',
            'fecha_creacion',
            'fecha_actualizacion',
        ]


        read_only_fields = ['id', 'fecha_creacion', 'fecha_actualizacion']