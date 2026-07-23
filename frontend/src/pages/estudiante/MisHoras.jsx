import {
  Award,
  Calendar,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react";

import Layout from "../../components/layout/Layout";

function MisHoras() {
  const horasObtenidas = 18;
  const horasRequeridas = 40;

  const porcentaje = Math.round(
    (horasObtenidas / horasRequeridas) * 100
  );

  const historial = [
    {
      id: 1,
      actividad: "Yoga para el Bienestar",
      fecha: "12/08/2026",
      horas: 4,
      estado: "Completada",
    },
    {
      id: 2,
      actividad: "Torneo de Fútbol",
      fecha: "18/08/2026",
      horas: 6,
      estado: "Completada",
    },
    {
      id: 3,
      actividad: "Festival Cultural",
      fecha: "02/09/2026",
      horas: 8,
      estado: "Completada",
    },
  ];

  return (
    <Layout>

      {/* Encabezado */}

      <div className="mb-8 sm:mb-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Mis Horas Lúdicas
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Consulta tu progreso y revisa las actividades
          que has completado durante el semestre.
        </p>

      </div>

      {/* Tarjetas */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl text-white p-6 shadow-lg hover:shadow-xl transition">

          <Clock size={34} />

          <p className="mt-5 text-cyan-100">
            Horas obtenidas
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {horasObtenidas}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <Award
            size={34}
            className="text-cyan-600"
          />

          <p className="mt-5 text-gray-500">
            Horas requeridas
          </p>

          <h2 className="text-4xl font-bold text-slate-800">
            {horasRequeridas}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <TrendingUp
            size={34}
            className="text-green-600"
          />

          <p className="mt-5 text-gray-500">
            Avance
          </p>

          <h2 className="text-4xl font-bold text-slate-800">
            {porcentaje}%
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <CheckCircle
            size={34}
            className="text-emerald-600"
          />

          <p className="mt-5 text-gray-500">
            Actividades realizadas
          </p>

          <h2 className="text-4xl font-bold text-slate-800">
            {historial.length}
          </h2>

        </div>

      </div>

      {/* Barra de progreso */}

      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-10">

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">

          <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
            Progreso del semestre
          </h2>

          <span className="font-semibold text-cyan-600 text-lg">
            {porcentaje}%
          </span>

        </div>

        <div className="w-full bg-slate-200 rounded-full h-5">

          <div
            className="bg-cyan-600 h-5 rounded-full transition-all duration-500"
            style={{
              width: `${porcentaje}%`,
            }}
          />

        </div>

        <p className="mt-5 text-gray-500 text-sm sm:text-base">
          Has completado <strong>{horasObtenidas}</strong> de{" "}
          <strong>{horasRequeridas}</strong> horas requeridas.
        </p>

      </div>

      {/* Historial */}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="p-6 border-b">

          <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
            Historial de actividades
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead className="bg-slate-50">

              <tr>

                <th className="text-left p-5">
                  Actividad
                </th>

                <th className="text-left">
                  Fecha
                </th>

                <th className="text-left">
                  Horas
                </th>

                <th className="text-left">
                  Estado
                </th>

              </tr>

            </thead>

            <tbody>

              {historial.map((item) => (

                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="p-5">
                    {item.actividad}
                  </td>

                  <td>

                    <div className="flex items-center gap-2">

                      <Calendar size={16} />

                      {item.fecha}

                    </div>

                  </td>

                  <td>
                    {item.horas}
                  </td>

                  <td>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">

                      {item.estado}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </Layout>
  );
}

export default MisHoras;