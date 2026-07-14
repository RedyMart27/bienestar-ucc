import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold text-cyan-600">
        Dashboard
      </h1>

      <p className="mt-6 text-xl">
        Bienvenido
      </p>

      <h2 className="mt-2 text-3xl font-semibold">
        {user?.username}
      </h2>

      <p className="mt-2 text-gray-600">
        Rol:
        <span className="font-semibold ml-2">
          {user?.rol}
        </span>
      </p>

      <button
        onClick={cerrarSesion}
        className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl transition"
      >
        Cerrar sesión
      </button>

    </div>
  );
}

export default Dashboard;