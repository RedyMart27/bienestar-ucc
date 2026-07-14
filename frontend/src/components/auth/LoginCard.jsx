import { useState } from "react";
import { GraduationCap, Shield, Sun } from "lucide-react";

import RoleTabs from "./RoleTabs";
import HomeCard from "./HomeCard";
import WelcomeSection from "./WelcomeSection";
import LoginForm from "./LoginForm";

function LoginCard() {
  const [role, setRole] = useState(null);

  const roles = {
    student: {
      color: "cyan",
      icon: <GraduationCap size={18} />,
      badge: "Acceso Estudiante",
      title: "Hola, estudiante",
      subtitle:
        "Accede a actividades, horas lúdicas y certificados.",
      button: "bg-cyan-600 hover:bg-cyan-700",
    },

    admin: {
      color: "lime",
      icon: <Shield size={18} />,
      badge: "Acceso Administrativo",
      title: "Panel administrativo",
      subtitle:
        "Gestión de actividades y reportes de bienestar.",
      button: "bg-lime-600 hover:bg-lime-700",
    },

    superadmin: {
      color: "yellow",
      icon: <Sun size={18} />,
      badge: "Acceso Super Admin",
      title: "Control total del sistema",
      subtitle:
        "Configuración del sistema y administración de usuarios.",
      button: "bg-yellow-500 hover:bg-yellow-600",
    },
  };

  return (
    <div className="w-1/2 min-h-screen bg-slate-100 flex items-center justify-center p-10">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        <RoleTabs
          role={role}
          setRole={setRole}
        />

        <div className="p-12">

          {role === null ? (

            <HomeCard />

          ) : (

            <>
              <WelcomeSection current={roles[role]} />

              <LoginForm current={roles[role]} />
            </>

          )}

        </div>

      </div>

    </div>
  );
}

export default LoginCard;