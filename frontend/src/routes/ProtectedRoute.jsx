import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <h2 className="text-3xl font-bold text-cyan-600">
          Cargando...
        </h2>
      </div>
    );
  }

  // Si no hay sesión
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario intenta entrar a un dashboard que no le corresponde
  if (!allowedRoles.includes(user.rol)) {

    switch (user.rol) {

      case "estudiante":
        return <Navigate to="/estudiante" replace />;

      case "administrativo":
        return <Navigate to="/admin" replace />;

      case "superadmin":
        return <Navigate to="/superadmin" replace />;

      default:
        return <Navigate to="/login" replace />;
    }

  }

  return children;
}

export default ProtectedRoute;