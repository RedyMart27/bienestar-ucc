import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function NavLinks() {
  const { user } = useAuth();

  const estudiante = [
    {
      name: "Inicio",
      path: "/estudiante",
    },
    {
      name: "Programas",
      path: "/estudiante/programas",
    },
    {
      name: "Actividades",
      path: "/estudiante/actividades",
    },
    {
      name: "Informativo",
      path: "/estudiante/informativo",
    },
    {
      name: "Mis Horas",
      path: "/estudiante/mis-horas",
    },
  ];

  const administrativo = [
    {
      name: "Dashboard",
      path: "/admin",
    },
    {
      name: "Programas",
      path: "/admin/programas",
    },
    {
      name: "Actividades",
      path: "/admin",
    },
    {
      name: "Usuarios",
      path: "/admin",
    },
  ];

  const superadmin = [
    {
      name: "Dashboard",
      path: "/superadmin",
    },
    {
      name: "Usuarios",
      path: "/superadmin",
    },
    {
      name: "Configuración",
      path: "/superadmin",
    },
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
    <nav className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `font-medium transition ${
              isActive
                ? "text-cyan-600 border-b-2 border-cyan-600 pb-1"
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