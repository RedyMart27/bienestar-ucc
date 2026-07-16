from django.contrib import admin
from .models import ContenidoInformativo


@admin.register(ContenidoInformativo)
class ContenidoInformativoAdmin(admin.ModelAdmin):
    """
    Configuración del modelo ContenidoInformativo en el panel admin.
    """
    list_display = ['titulo', 'tipo', 'programa', 'activo', 'destacado', 'fecha_creacion']
    list_filter = ['tipo', 'activo', 'destacado', 'programa']
    search_fields = ['titulo', 'contenido']
    list_editable = ['activo', 'destacado']

