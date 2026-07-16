import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex items-center gap-5">

      <div className="flex items-center gap-2">

        <User size={22} className="text-cyan-600" />

        <div className="text-right">
          <p className="font-semibold text-slate-800">
            {user?.username}
          </p>

          <p className="text-xs text-slate-500 capitalize">
            {user?.rol}
          </p>
        </div>

      </div>

      <button
        onClick={cerrarSesion}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
      >
        <LogOut size={18} />
        Salir
      </button>

    </div>
  );
}

export default UserMenu;