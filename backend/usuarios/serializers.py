from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import Usuario

class UsuarioRegistroSerializer(serializers.ModelSerializer):

    """
    Serializer para el registro de nuevos usuarios.
    Maneja la validacion y creacion de usuarios con contraseña cifrada.
    """
    password = serializers.CharField(
        write_only = True,
        required = True,
        validators = [validate_password]
    )

    password2 = serializers.CharField(
        write_only = True,
        required = True
    )

    class Meta:
        model = Usuario
        fields = (
            'username',
            'email',
            'first_name',
            'last_name',
            'password',
            'password2',
            'rol',
            'codigo_estudiantil',
            'programa_academico',
            'telefono',
        )

    def validate(self, attrs):
        """
        Verifica que las dos contraseñas coincidan
        """
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {'password': 'las contraseñas no coinciden.'}
            )
        return attrs
    
    def create(self, validated_data):
        """
        Crea el  nuevo usuario con la contraseña correctamente cifrada.
        """
        validated_data.pop('password2')
        password = validated_data.pop('password')
        usuario = Usuario(**validated_data)
        usuario.set_password(password)
        usuario.save()
        return usuario
    

class UsuarioPerfilSerializer(serializers.ModelSerializer):
    """
    Serializer para ver y editar el perfil del usuario autenticado.
    No expone la contraseña en ningun momeento
    """
    class Meta:
        model = Usuario
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'rol',
            'codigo_estudiantil',
            'programa_academico',
            'telefono',
            'foto_perfil',
            'fecha_creacion',  
            'activo',
    
        ]

        read_only_fields = ['id', 'fecha_creacion', 'rol']

