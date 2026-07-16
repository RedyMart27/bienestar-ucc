from django.db import models
from programas.models import Programa


class ContenidoInformativo(models.Model):
    """
    Modelo que representara las noticias, servicios y rutas de atencion publicadas por el area de bienestar UCC. Los estudiantes podran consueltarlas desde la aplicacion 
    """

    TIPO_CHOICES = [
        ('noticia', 'Noticia'),
        ('servicio', 'Servicio'),
        ('ruta_atencion', 'Ruta de Atencion'),
        ('evento', 'Evento')
    ]

    titulo = models.CharField(
        max_length = 200,
        verbose_name = 'titulo',

    )

    contenido = models.TextField(
        verbose_name  = 'Contenido',
    )


    tipo = models.CharField(
        max_length = 20,
        choices = TIPO_CHOICES,
        default = 'noticia',
        verbose_name = 'Tipo de contenido',
    )

    programa = models.ForeignKey(
        Programa,
        on_delete = models.SET_NULL,
        null = True,
        blank = True,
        related_name = 'contenidos',
        verbose_name = 'Programa relacionado',
    )

    imagen = models.ImageField(
        upload_to = 'informativo/',
        blank = True,
        null = True,
        verbose_name = 'Imagen',
    )

    activo = models.BooleanField(
        default = True,
        verbose_name = 'Publicado',
    )

    destacado = models.BooleanField(
        default = False,
        verbose_name = 'Contenido destacadox', 
    )

    fecha_creacion = models.DateTimeField(
        auto_now_add = True,
        verbose_name = 'Fecha de publicación',
    )

    fecha_actualizacion = models.DateTimeField(
        auto_now = True,    
        verbose_name = 'Ultima actualización',
    )


    class Meta:
        verbose_name = 'Contenido Informativo'
        verbose_name_plural = 'Contenidos Informativos'
        db_table = 'informativo'
        ordering = ['-fecha_creacion']

    def __str__(self):
        return f'{self.get_tipo_display()} - {self.titulo}'
