from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Programa
from .serializers import ProgramaSerializer

from usuarios.permissions import EsAdministrativo
from rest_framework.permissions import AllowAny


class ProgramaListView(APIView):
    """
    GET : lista todos los programas activos (publicos)

    POST : crea un nuevo programa (solo administrativos)
    """

    permission_classes = [AllowAny]

    def get(self, request):
        programas = Programa.objects.filter(activo=True)
        serializer = ProgramaSerializer(programas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        self.permission_classes = [EsAdministrativo]
        self.check_permissions(request)

        serializer = ProgramaSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProgramaDetailView(APIView):
    """
    GET : permite ver detalles de un programa especifico (publico)

    PUT : permite editar un programa (solo administrativos)
    """

    permission_classes = [AllowAny]

    def get_object(self, pk):
        try:
            # ======== ESTA ES LA CORRECCIÓN ========
            return Programa.objects.get(pk=pk)
            # =======================================

        except Programa.DoesNotExist:
            return None

    def get(self, request, pk):
        programa = self.get_object(pk)

        if not programa:
            return Response(
                {"error": "Programa no encontrado."},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = ProgramaSerializer(programa)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        self.permission_classes = [EsAdministrativo]
        self.check_permissions(request)

        programa = self.get_object(pk)

        if not programa:
            return Response(
                {"error": "Programa no encontrado."},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = ProgramaSerializer(
            programa,
            data=request.data,
            partial=True,
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)