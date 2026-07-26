from django.urls import path
from .views import (
    ActividadListView,
    ActividadDetailView,
    InscripcionView,
    MisInscripcionesView,
    ValidarParticipacionView,
)

urlpatterns = [
    path('', ActividadListView.as_view(), name='actividad-list'),

    path('<int:pk>/', ActividadDetailView.as_view(), name='actividad-detail'),

    path('<int:pk>/inscribirse/', InscripcionView.as_view(), name='inscripcion'),

    path('mis-inscripciones/', MisInscripcionesView.as_view(), name='mis-inscripciones'),
    
    path('inscripciones/<int:pk>/validar/', ValidarParticipacionView.as_view(), name='validar-participacion'),
]