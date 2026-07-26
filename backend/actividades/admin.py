from django.contrib import admin
from .models import Actividad, Inscripcion, Participacion


@admin.register(Actividad)
class ActividadAdmin(admin.ModelAdmin):
    """
    Configuración del modelo Actividad en el panel admin. 

    """

    list_display = ['nombre', 'programa', 'fecha_inicio', 'cupos', 'estado']

    list_filter = ['estado', 'programa']

    search_fields = ['nombre', 'lugar']

    list_editable = ['estado']


@admin.register(Inscripcion)
class InscripcionAdmin(admin.ModelAdmin):
    """
    Configuración del modelo Inscripcion en el panel admin.
    """

    list_display = ['estudiante', 'actividad', 'fecha_inscripcion', 'activa']
    list_filter = ['activa']
    search_fields = ['estudiante__username', 'actividad__nombre']


@admin.register(Participacion)
class ParticipacionAdmin(admin.ModelAdmin):
    """
    Configuración del modelo Participacion en el panel admin.
    """
    
    list_display = ['inscripcion', 'validado_por', 'fecha_validacion']
    search_fields = ['inscripcion__estudiante__username']


