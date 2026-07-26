import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";

// ===================== ESTUDIANTE =====================

import DashboardEstudiante from "../pages/estudiante/Dashboard";
import Actividades from "../pages/estudiante/Actividades";
import ActividadDetalle from "../pages/estudiante/ActividadDetalle";
import Programas from "../pages/estudiante/Programas";
import ProgramaDetalle from "../pages/estudiante/ProgramaDetalle";
import Informativo from "../pages/estudiante/Informativo";
import NoticiaDetalle from "../pages/estudiante/NoticiaDetalle";
import MisHoras from "../pages/estudiante/MisHoras";

// ===================== ADMINISTRATIVO =====================

import DashboardAdmin from "../pages/admin/Dashboard";
import ProgramasAdmin from "../pages/admin/Programas";

// ===================== SUPERADMIN =====================

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

        <Route
          path="/estudiante"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <DashboardEstudiante />
            </ProtectedRoute>
          }
        />

        <Route
          path="/estudiante/programas"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <Programas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/estudiante/programas/:id"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <ProgramaDetalle />
            </ProtectedRoute>
          }
        />

        <Route
          path="/estudiante/actividades"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <Actividades />
            </ProtectedRoute>
          }
        />

        <Route
          path="/estudiante/actividades/:id"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <ActividadDetalle />
            </ProtectedRoute>
          }
        />

        <Route
          path="/estudiante/informativo"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <Informativo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/estudiante/informativo/:id"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <NoticiaDetalle />
            </ProtectedRoute>
          }
        />

        <Route
          path="/estudiante/mis-horas"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <MisHoras />
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

        <Route
          path="/admin/programas"
          element={
            <ProtectedRoute allowedRoles={["administrativo"]}>
              <ProgramasAdmin />
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