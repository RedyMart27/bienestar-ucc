from django.db import models
from programas.models import Programa


class Actividad(models.Model):
    """
    Modelo que representa las actividades organizadas por el area de Bieneatar UCC, los estudiantes pueden inscribirse y acumular horas ludicas al participar
    """


    ESTADO_CHOICES = [
        ('activa', 'Activa'),
        ('cancelada', 'Cancelada'),
        ('finalizada', 'Finalizada'),
    ]


    nombre = models.CharField(
        max_length = 200,
        verbose_name = 'Nombre de la actividad'
    )

    descripcion = models.TextField(
        verbose_name = 'Descripción'
    )

    programa = models.ForeignKey(
        Programa,
        on_delete = models.SET_NULL,
        null = True,
        blank = True,
        related_name = 'actividades',
        verbose_name = 'Programa'
    )

    fecha_inicio = models.DateTimeField(
        verbose_name = 'Fecha y hora de inicio'
    )

    fecha_fin = models.DateTimeField(
        verbose_name = 'Fecha y hora de finalización'
    )

    lugar = models.CharField(
        max_length = 200,
        verbose_name = 'Lugar'
    )

    cupos = models.PositiveIntegerField(
        default = 30,
        verbose_name = 'Cupos disponibles'
    )

    horas_ludicas = models.PositiveIntegerField(
        default = 1,
        verbose_name = 'Horas ludicas que otorga'
    )

    iamgen = models.ImageField(
        upload_to = 'actividades/',
        blank = True,
        null = True,
        verbose_name = 'Imagen de la actividad'
    )

    estado = models.CharField(
        max_length = 20,
        choices = ESTADO_CHOICES,
        default = 'activa',
        verbose_name = 'Estado'
    )

    fecha_creacion = models.DateTimeField(
        auto_now_add = True,
        verbose_name = 'Fecha de creación'
    )



    class Meta:
        verbose_name = 'Actividad'
        verbose_name_plural = 'Actividades'
        db_table = 'actividades'
        ordering = ['fecha_inicio']

    def __str__(self):
        return f'{self.nombre} - {self.programa}'
    
    def cupos_disponibles(self):
        """"calcula los cupos disponibles restando las inscipciones activas."""
        return self.cupos - self.inscripciones.filter(activa = True).count()
    
    def esta_disponible(self):
        """ verifica si la actividad acepta nevas inscripciones"""
        return self.estado == 'activa' and self.cupos_disponibles() > 0




class Inscripcion(models.Model):
    """
    Modelo que reegistra que estudiante se inscribio a que actividad.
    Controla que un estudiandte no se inscriba dos veces en la misma actividad y que no se supere el limite de cupos
    """

    estudiante = models.ForeignKey(
        'usuriaos.Usuario',
        on_delete = models.CASCADE,
        related_name = 'inscripciones',
        verbose_name = 'Estudiante'
    )

    actividad = models.ForeignKey(
        Actividad,
        on_delete = models.CASCADE,
        related_name = 'inscripciones',
        verbose_name = 'Actividad'
    )

    fecha_inscripcion = models.DateTimeField(
        auto_now_add = True,
        verbose_name = 'Fecha de inscripcion'
    )

    activa = models.BooleanField(
        default = True,
        verbose_name = 'Inscripción activa'
    )

    class Meta:
        verbose_name = 'Inscripción'
        verbose_name_plural = 'Inscripciones'
        db_table = 'inscripciones'
        unique_together = ['estudiante', 'actividad']

    def __str__(self):
        return f'{self.estudiante} → {self.actividad}'    
    


class Participacion(models.Model):
    """
    Modelo que registra si un estudiante asistió a una actividad.
    Solo el personal administrativo puede crear este registro
    después de verificar la asistencia del estudiante.
    Cuando se crea una participación, las horas lúdicas se suman
    automáticamente al estudiante.
    """

    inscripcion = models.OneToOneField(
        Inscripcion,
        on_delete = models.CASCADE,
        related_name = 'participacion',
        verbose_name = ' Inscripción'
    )
    fecha_validacion = models.DateTimeField(
        auto_now_add = True,
        verbose_name = 'Fecha de validación'
    )
    validado_por = models.ForeignKey(
        'usuarios.Usuario',
        on_delete = models.SET_NULL,
        null = True,
        related_name = 'participaciones_validadas',
        verbose_name = 'Validado por'
    )
    observaciones = models.TextField(
        blank = True,
        null = True,
        verbose_name = 'Observaciones'
    )

    class Meta:
        verbose_name = 'Participación'
        verbose_name_plural = 'Participaciones'
        db_table = 'participaciones'

    def __str__(self):
        return f'Participación de {self.inscripcion.estudiante} en {self.inscripcion.actividad}'