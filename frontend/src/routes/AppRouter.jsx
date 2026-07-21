import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";

// Estudiante
import DashboardEstudiante from "../pages/estudiante/Dashboard";
import Actividades from "../pages/estudiante/Actividades";
import ActividadDetalle from "../pages/estudiante/ActividadDetalle";
import Informativo from "../pages/estudiante/Informativo";
import NoticiaDetalle from "../pages/estudiante/NoticiaDetalle";
import MisHoras from "../pages/estudiante/MisHoras";

// Administrativo
import DashboardAdmin from "../pages/admin/Dashboard";

// Superadministrador
import DashboardSuperAdmin from "../pages/superadmin/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Ruta inicial */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* ===================== ESTUDIANTE ===================== */}

        {/* Dashboard */}
        <Route
          path="/estudiante"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <DashboardEstudiante />
            </ProtectedRoute>
          }
        />

        {/* Actividades */}
        <Route
          path="/estudiante/actividades"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <Actividades />
            </ProtectedRoute>
          }
        />

        {/* Detalle Actividad */}
        <Route
          path="/estudiante/actividades/:id"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <ActividadDetalle />
            </ProtectedRoute>
          }
        />

        {/* Mis Horas */}
        <Route
          path="/estudiante/mis-horas"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <MisHoras />
            </ProtectedRoute>
          }
        />

        {/* Informativo */}
        <Route
          path="/estudiante/informativo"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <Informativo />
            </ProtectedRoute>
          }
        />

        {/* Detalle Noticia */}
        <Route
          path="/estudiante/informativo/:id"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <NoticiaDetalle />
            </ProtectedRoute>
          }
        />

        {/* ===================== ADMINISTRATIVO ===================== */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["administrativo"]}>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />

        {/* ===================== SUPERADMIN ===================== */}

        <Route
          path="/superadmin"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <DashboardSuperAdmin />
            </ProtectedRoute>
          }
        />

        {/* Ruta inexistente */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;