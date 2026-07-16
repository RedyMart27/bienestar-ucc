from django.urls import path
from .views import ProgramaListView, ProgramaDetailView

urlpatterns = [
    path('', ProgramaListView.as_view(), name = 'programa-list'),
    path('<int:pk>/', ProgramaDetailView.as_view(), name = 'programa-detail')
]
