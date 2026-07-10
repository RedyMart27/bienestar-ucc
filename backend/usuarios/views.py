from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import Usuario
from .serializers import UsuarioRegistroSerializer, UsuarioPerfilSerializer


class RegistroView(APIView):

    """
    Endpoint para  registrar nuevos usuarios en el sistema.
    No requiere autenticacion por que el usuario no tiene cuenta
    """

    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UsuarioRegistroSerializer(data = request.data)
        
        if serializer.is_valid():
            usuario = serializer.save()
            return Response(
                {
                    'mensaje': 'Usuario registrado exitosamente.',
                    'usuario': UsuarioPerfilSerializer(usuario).data
                },

                status = status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST) 
    

class LoginView(APIView):

    """
    endpoint para iniciar sesion.
    Recibe username y password, devuelve tokens JWT si las correcciones son correctas
    """

    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response(
                {'error': 'Por favor ingres ususrio y contraseña.'},
                status = status.HTTP_400_BAD_REQUEST
            )
        
        usuario = authenticate(username = username, password = password)
        
        if not usuario:
            return Response(
                {'error': 'Credenciales incorrectas.'},
                status = status.HTTP_401_UNAUTHORIZED
            )
        
        if not usuario.activo:
            return Response(
                {'error': 'Tu cuenta esta desactivada. contancta al administrador.'},
                status = status.HTTP_403_FORBIDDEN
            )
        
        refresh = RefreshToken.for_user(usuario)

        return Response(
            {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'usuario': UsuarioPerfilSerializer(usuario).data
            },
            status = status.HTTP_200_OK
        )



class PerfilView(APIView):

    """
    Endpoint para ver y editar el perfil del usuario autenticado.
    Requiere que el ususario este autenticado con JWT
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UsuarioPerfilSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request):
        serializer = UsuarioPerfilSerializer(request.user, data=request.data, partial=True)

        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


