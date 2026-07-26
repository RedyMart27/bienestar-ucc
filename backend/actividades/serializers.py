from rest_framework import serializers
from .models import Actividad, Inscripcion, Participacion
from programas.serializers import ProgramaSerializer


class ActividadSerializer(serializers.ModelSerializer):
    """
    Serializer para el modelo Actividad.
    Incluye la informacion del programa y cupos disponibles en tiempo real
    """

    programa_detalle = ProgramaSerializer(
        source = 'programa',
        read_only = True
    )

    estado_display = serializers.CharField(
        source = 'get_estado_display',
        read_only = True
    )

    cupos_disponibles = serializers.SerializerMethodField()

    esta_disponible = serializers.SerializerMethodField()


    class Meta:
        model = Actividad
        fields = [
            'id',
            'nombre',
            'descripcion',
            'programa',
            'programa_detalle',
            'fecha_inicio',
            'fecha_fin',
            'lugar',
            'cupos',
            'cupos_disponibles',
            'horas_ludicas',
            'imagen',
            'estado',
            'estado_display',
            'esta_disponible',
            'fecha_creacion',

        ]

        read_only_fields = ['id', 'fecha_creacion']


    def get_cupos_disponibles(self, obj):
        return obj.cupos_disponibles()

    def get_esta_disponible(self, obj):
        return obj.esta_disponible()


class InscripcionSerializer(serializers.ModelSerializer):
    """
    Serializer para el modelo Inscripcion.
    Muestra los detalles de la actividad y el estudiante.
    """


    actividad_detalle = ActividadSerializer(
        source='actividad',
        read_only=True
    )

    class Meta:
        model = Inscripcion
        fields = [
            'id',
            'estudiante',
            'actividad',
            'actividad_detalle',
            'fecha_inscripcion',
            'activa',
        ]


        read_only_fields = ['id', 'fecha_inscripcion', 'estudiante']


class ParticipacionSerializer(serializers.ModelSerializer):
    """
    Serializer para el modelo Participacion.
    Registra la asistencia validada por el administrativo.
    """


    class Meta:
        model = Participacion
        fields = [
            'id',
            'inscripcion',
            'fecha_validacion',
            'validado_por',
            'observaciones',
        ]


        read_only_fields = ['id', 'fecha_validacion', 'validado_por']    