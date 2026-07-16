from django.contrib import admin
from .models import Programa

@admin.register(Programa)
class ProgramaAdmin(admin.ModelAdmin):
    """
    Configuracion para el modelo Programa  en el panel de administracion
    """

    list_display = ['get_nombre_display', 'activo', 'fecha_creacion']
    list_filter = ['activo', 'nombre']
    search_fields = ['nombre', 'descripcion']
    list_editable = ['activo']