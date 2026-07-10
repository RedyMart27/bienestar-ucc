from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegistroView, LoginView, PerfilView

urlpatterns = [
    path('registro/', RegistroView.as_view(), name='registro'),
    path('login/', LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('perfil/', PerfilView.as_view(), name='perfil'),

]