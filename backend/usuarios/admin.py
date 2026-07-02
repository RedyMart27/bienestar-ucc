from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario

@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    """
    Configuracion del modelo de usuario en el panel de administracion.
    nos permite gestionar usuarios desde la interfaz admin de Django.
    """
    list_display = ['username', 'email', 'first_name', 'last_name', 'rol', 'activo']

    list_filter = ['rol', 'activo']

    search_fields = ['username', 'email', 'first_name', 'last_name', 'codigo_estudiantil',]

    fieldsets = UserAdmin.fieldsets + (
        ('información UCC', {
            'fields': ('rol', 'codigo_estudiantil', 'programa_academico', 'telefono', 'foto_perfil', 'activo')
        }),
    )
