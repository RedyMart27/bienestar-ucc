from django.db import models
from django.contrib.auth.models import AbstractUser

class Usuario(AbstractUser):
    """Modelo de usuario personalizado que para el sistema de BIeneastar UCC.
    Extiende el usuario base de Django agregando campos especificos para el proyeco como son el rol, codigo estudiantil y programa academico.
    """

    ROL_CHOICES = [
        ('estudiante', 'Estudiante'),
        ('administrativo', 'Adsministrativo'),
        ('superadmin', 'Superadministrador'),
    ]

    rol = models.CharField(
        max_length = 20, 
        choices = ROL_CHOICES,
        default = 'estudiante',
        verbose_name = 'Rol del usuario',
    )

    codigo_estudiantil = models.CharField(
        max_length = 20,
        blank = True,
        null = True,
        unique = True,
        verbose_name = 'codigo estudiantil'
    )

    programa_academico = models.CharField(
        max_length = 100,
        blank = True,
        null = True,
        verbose_name = 'Programa academico'
    )

    telefono = models.CharField(
        max_length = 15,
        blank = True,
        null = True,
        verbose_name = 'Telefono'
    )

    foto_perfil = models.ImageField(
        upload_to = 'fotos_perfil/',
        blank = True,
        null = True,
        verbose_name = 'Foto de perfil'
    )

    fecha_creacion = models.DateTimeField(
        auto_now_add = True,
        verbose_name = 'Fecha de creación'
    )

    activo = models.BooleanField(
        default = True,
        verbose_name = 'Usuario activo'
    )

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        db_table = 'usuarios'

    def __str__(self):
        return f'{self.get_full_name()} ({self.rol})'
    
    def es_estudiante(self):
        return self.rol == 'estudiante'
    
    def es_administrativo(self):
        return self.rol == 'administrativo'
    
    def es_superadmin(self):
        return self.rol == 'superadmin'




