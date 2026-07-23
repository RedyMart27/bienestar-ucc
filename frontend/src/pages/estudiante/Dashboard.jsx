import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/AuthContext";
import {
  CalendarDays,
  Clock3,
  Trophy,
  Users,
} from "lucide-react";

function Dashboard() {
  const { user } = useAuth();

  return (
    <Layout>

      {/* Encabezado */}

      <div className="mb-8 sm:mb-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Bienvenido, {user?.username}
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Gestiona tus actividades y consulta el progreso de tus horas lúdicas.
        </p>

      </div>

      {/* Tarjetas */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl text-white p-6 shadow-lg hover:shadow-xl transition">

          <Clock3 size={34} />

          <p className="mt-5 text-cyan-100">
            Horas acumuladas
          </p>

          <h2 className="text-4xl font-bold mt-2">
            18
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <CalendarDays
            size={34}
            className="text-cyan-600"
          />

          <p className="mt-5 text-gray-500">
            Actividades disponibles
          </p>

          <h2 className="text-4xl font-bold text-slate-800">
            6
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <Trophy
            size={34}
            className="text-amber-500"
          />

          <p className="mt-5 text-gray-500">
            Horas requeridas
          </p>

          <h2 className="text-4xl font-bold text-slate-800">
            40
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <Users
            size={34}
            className="text-green-600"
          />

          <p className="mt-5 text-gray-500">
            Rol
          </p>

          <h2 className="text-xl sm:text-2xl font-bold capitalize text-slate-800">
            {user?.rol}
          </h2>

        </div>

      </div>

      {/* Resumen */}

      <div className="mt-8 sm:mt-10 bg-white rounded-2xl shadow-md p-6 sm:p-8">

        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
          Resumen
        </h2>

        <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base">
          Desde este panel podrás consultar las actividades de Bienestar
          Universitario, inscribirte en nuevos eventos, revisar las horas
          lúdicas acumuladas y mantenerte informado sobre las últimas
          noticias y avisos publicados por la universidad.
        </p>

      </div>

    </Layout>
  );
}

export default Dashboard;