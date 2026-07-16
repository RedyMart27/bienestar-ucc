from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ContenidoInformativo
from .serializers import ContenidoInformativoSerializer
from usuarios.permissions import EsAdministrativo
from rest_framework.permissions import AllowAny

class ContenidoInformativoListView(APIView):
    """
    GET  : Lista todos los contenidos activos (público)
    POST →: Crea un nuevo contenido (solo administrativos)
    """

    permission_classes = [AllowAny]

    def get(self, request):
        tipo = request.query_params.get('tipo', None)
        programa = request.query_params.get('programa', None)
        destacado = request.query_params.get('destacado', None)

        contenidos = ContenidoInformativo.objects.filter(activo=True)

        if tipo:
            print(f"Filtrando por tipo: '{tipo}'")
            contenidos = contenidos.filter(tipo=tipo)
        if programa:
            contenidos = contenidos.filter(programa__id=programa)
        if destacado:
            contenidos = contenidos.filter(destacado=True)

        serializer = ContenidoInformativoSerializer(contenidos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        self.permission_classes = [EsAdministrativo]
        self.check_permissions(request)
        serializer = ContenidoInformativoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ContenidoInformativoDetailView(APIView):
    """
    GET : permite ver  detalle de un contenido específico (público)
    PUT : permite editar un contenido (solo administrativos)
    """

    permission_classes = [AllowAny]

    def get_object(self, pk):
        try:
            return ContenidoInformativo.objects.get(pk=pk)
        
        except ContenidoInformativo.DoesNotExist:
            return None

    def get(self, request, pk):
        contenido = self.get_object(pk)

        if not contenido:
            return Response(
                {'error': 'Contenido no encontrado.'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        serializer = ContenidoInformativoSerializer(contenido)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        self.permission_classes = [EsAdministrativo]
        self.check_permissions(request)
        contenido = self.get_object(pk)

        if not contenido:
            return Response(
                {'error': 'Contenido no encontrado.'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        serializer = ContenidoInformativoSerializer(
            contenido,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


