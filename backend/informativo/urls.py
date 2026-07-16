from django.urls import path
from .views import ContenidoInformativoListView, ContenidoInformativoDetailView

urlpatterns = [
    path('', ContenidoInformativoListView.as_view(), name='informativo-list'),
    path('<int:pk>/', ContenidoInformativoDetailView.as_view(), name='informativo-detail'),
]