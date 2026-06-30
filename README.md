# Bienestar UCC — Sistema de Gestión de Bienestar Universitario

Aplicación web para la gestión integral de los servicios de Bienestar Universitario
de la Universidad Cooperativa de Colombia, Campus Santa Marta.

**Autores:** Bleyder Yesid Martínez Pacheco · Jeifre de Jesús Salcedo Acosta  
**Director:** Ph.D. Luis Jorge Durán Charris  
**Programa:** Ingeniería de Software — 2026

## Stack Tecnológico
- Frontend: React + Tailwind CSS + Axios
- Backend: Django REST Framework + JWT
- Base de Datos: PostgreSQL
- Metodología: Scrum

## Cómo ejecutar el proyecto

### Backend
```bash
cd backend
venv\Scripts\activate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Módulos del sistema
- Autenticación con roles (estudiante, administrativo, superadmin)
- Gestión de los 5 programas institucionales
- Actividades e inscripciones estudiantiles
- Registro y validación de horas lúdicas
- Panel administrativo con métricas
- Generación de reportes PDF y Excel
- Sistema de notificaciones