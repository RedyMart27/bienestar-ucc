from rest_framework.permissions import BasePermission

class EsAdministrativo(BasePermission):
    """
    Permiso que permite acceso solo a usuarios con rol administrativo o superadmin.
    Se usa en endpoints de gestio como crear actividades, validad participacion y ver reportes.
    """

    message = 'No tiene permisos para realizar esta acción. Se requiere rol administrativo'

    def has_permission(self, request, view):
        return bool(
            request.user and request.user.is_authenticated and (request.user.es_administrativo() or request.user.es_superadmin())
        )
    

class EsSuperAdmin(BasePermission):
    """
    Permiso que paermite acceso solo a usuarios con rol superadmin. Se usa en endpoints de gestion total del sistema como activar/desactivar usuarios y configuracion general.
    """

    message = 'No tiene permisos para realizar esta acción. Se requiere rol superadministrador.'

    def has_permission(self, request, view):
        return bool(
            request.user and request.user.is_authenticated and request.user.es_superadmin()
        )
    

class EsEstudiante(BasePermission):
    """
    Permiso que permite acceso solo a usuarios con rol estudiante. Se usa en endpoints exclusivos del estudiante como inscribirse a actividades y ver sus horas de bienestar.
    """

    message = 'No tiene permisos para realizar esta acción. Se requiere rol estudiante.'

    def has_permission(self, request, view):
        return bool(
            request.user and request.user.is_authenticated and request.user.es_estudiante()
        )
    


class ESAdministrativoOEstudiante(BasePermission):
    """
    Permiso que permite acceso a cualquier usuario autenticado independientemente de su rol. Se usa en endpoints que tanto estudiantes como administrativos necesitan consultar, como la lista de actividades.
    """

    message = 'Debes estar autenticado para realizar esta acción.'

    def has_permission(self, request, view):
        return bool(
            request.user and request.user.is_authenticated 
        )