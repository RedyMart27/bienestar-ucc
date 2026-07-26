from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Actividad, Inscripcion, Participacion
from .serializers import ActividadSerializer, InscripcionSerializer, ParticipacionSerializer
from usuarios.permissions import EsAdministrativo, EsEstudiante


class ActividadListView(APIView):
    """
    GET : Lista todas las actividades activas (público)
    POST: Crea una nueva actividad (solo administrativos)
    """
    permission_classes = [AllowAny]

    def get(self, request): 

        programa = request.query_params.get('programa', None)

        estado = request.query_params.get('estado', 'activa')

        actividades = Actividad.objects.filter(estado=estado)

        if programa:
            actividades = actividades.filter(programa__id=programa)

        serializer = ActividadSerializer(actividades, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):

        self.permission_classes = [EsAdministrativo]

        self.check_permissions(request)
        serializer = ActividadSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActividadDetailView(APIView):
    """
    GET : Ver detalle de una actividad (público)
    PUT : Editar una actividad (solo administrativos)
    """
    permission_classes = [AllowAny]

    def get_object(self, pk):

        try:
            return Actividad.objects.get(pk=pk)
            
        except Actividad.DoesNotExist:
            return None

    def get(self, request, pk):

        actividad = self.get_object(pk)

        if not actividad:
            return Response(
                {'error': 'Actividad no encontrada.'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        serializer = ActividadSerializer(actividad)
        return Response(serializer.data, 
        status=status.HTTP_200_OK)

    def put(self, request, pk):

        self.permission_classes = [EsAdministrativo]

        self.check_permissions(request)

        actividad = self.get_object(pk)

        if not actividad:
            return Response(
                {'error': 'Actividad no encontrada.'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        serializer = ActividadSerializer(actividad, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class InscripcionView(APIView):
    """
    POST :Estudiante se inscribe a una actividad
    DELETE : Estudiante cancela su inscripción
    """
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):

        actividad = self._get_actividad(pk)

        if not actividad:
            return Response(
                {'error': 'Actividad no encontrada.'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        if not actividad.esta_disponible():
            return Response(
                {'error': 'La actividad no está disponible o no tiene cupos.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if Inscripcion.objects.filter(
            estudiante=request.user,
            actividad=actividad,
            activa=True

        ).exists():
            return Response(
                {'error': 'Ya estás inscrito en esta actividad.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        inscripcion = Inscripcion.objects.create(
            estudiante=request.user,
            actividad=actividad
        )

        serializer = InscripcionSerializer(inscripcion)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk):

        actividad = self._get_actividad(pk)

        if not actividad:
            return Response(
                {'error': 'Actividad no encontrada.'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        try:
            inscripcion = Inscripcion.objects.get(
                estudiante=request.user,
                actividad=actividad,
                activa=True
            )

            inscripcion.activa = False
            inscripcion.save()

            return Response(
                {'mensaje': 'Inscripción cancelada exitosamente.'},
                status=status.HTTP_200_OK
            )
        
        except Inscripcion.DoesNotExist:
            return Response(
                {'error': 'No tienes una inscripción activa en esta actividad.'},
                status=status.HTTP_404_NOT_FOUND
            )

    def _get_actividad(self, pk):
        try:
            return Actividad.objects.get(pk=pk)
        
        except Actividad.DoesNotExist:
            return None


class MisInscripcionesView(APIView):
    """
    GET :Estudiante ve todas sus inscripciones activas
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        inscripciones = Inscripcion.objects.filter(
            estudiante=request.user,
            activa=True
        )

        serializer = InscripcionSerializer(inscripciones, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class ValidarParticipacionView(APIView):
    """
    POST : Administrativo valida la participación de un estudiante
    """
    permission_classes = [EsAdministrativo]

    def post(self, request, pk):
        try:
            inscripcion = Inscripcion.objects.get(pk=pk, activa=True)

        except Inscripcion.DoesNotExist:
            return Response(
                {'error': 'Inscripción no encontrada o inactiva.'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        if hasattr(inscripcion, 'participacion'):
            return Response(
                {'error': 'Esta inscripción ya tiene una participación registrada.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        participacion = Participacion.objects.create(
            inscripcion=inscripcion,
            validado_por=request.user,
            observaciones=request.data.get('observaciones', '')
        )
        
        serializer = ParticipacionSerializer(participacion)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


