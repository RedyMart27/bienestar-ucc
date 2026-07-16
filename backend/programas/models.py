from django.db import models

class Programa(models.Model):
    """
    Modelo que representara los 5 programas institucionales del area de bienestar universitario de la UCC.
    """

    PROGRAMAS_CHOICES = [
        ('armonia', 'En Armonía Contigo'),
        ('enlace', 'Enlace'),
        ('cultura', 'Gestion de cultura Universitaria'),
        ('deporte', 'Deporte y Recreación'),
        ('arte', 'Arte y Cultua'),
    ]

    nombre = models.CharField(
        max_length = 100,
        choices = PROGRAMAS_CHOICES,
        unique = True,
        verbose_name = 'Nombre del programa',
    )

    descripcion = models.TextField(
        verbose_name = 'Descripcion'
    )

    imagen = models.ImageField(
        upload_to = 'programas/',
        blank = True,
        null = True,
        verbose_name = 'Imagen del programa',
    )

    activo = models.BooleanField(
        default = True,
        verbose_name = 'Programa activo',
    )

    fecha_creacion = models.DateTimeField(
        auto_now_add = True,
        verbose_name = 'Fecha de creación',
    )

    fecha_actualizacion = models.DateTimeField(
        auto_now = True,
        verbose_name = 'Ultima actualización',
    )

    class Meta:
        verbose_name = 'Programa'
        verbose_name_plural = 'Programas'
        db_table = 'programas'
        ordering = ['nombre']

    def __str__(self):
        return self.get_nombre_display()
