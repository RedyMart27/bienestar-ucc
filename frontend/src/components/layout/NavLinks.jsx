import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function NavLinks() {
  const { user } = useAuth();

  const estudiante = [
    { name: "Inicio", path: "/estudiante" },
    { name: "Actividades", path: "/estudiante" },
    { name: "Perfil", path: "/estudiante" },
  ];

  const administrativo = [
    { name: "Dashboard", path: "/admin" },
    { name: "Actividades", path: "/admin" },
    { name: "Usuarios", path: "/admin" },
  ];

  const superadmin = [
    { name: "Dashboard", path: "/superadmin" },
    { name: "Usuarios", path: "/superadmin" },
    { name: "Configuración", path: "/superadmin" },
  ];

  let links = [];

  switch (user?.rol) {
    case "estudiante":
      links = estudiante;
      break;

    case "administrativo":
      links = administrativo;
      break;

    case "superadmin":
      links = superadmin;
      break;

    default:
      links = [];
  }

  return (
    <nav className="flex items-center gap-8">

      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `font-medium transition ${
              isActive
                ? "text-cyan-600"
                : "text-slate-600 hover:text-cyan-600"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}

    </nav>
  );
}

export default NavLinks;