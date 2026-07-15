import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";

import DashboardEstudiante from "../pages/estudiante/Dashboard";
import DashboardAdmin from "../pages/admin/Dashboard";
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

        {/* Estudiante */}
        <Route
          path="/estudiante"
          element={
            <ProtectedRoute allowedRoles={["estudiante"]}>
              <DashboardEstudiante />
            </ProtectedRoute>
          }
        />

        {/* Administrativo */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["administrativo"]}>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />

        {/* Super Admin */}
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