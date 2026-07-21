import { Link, useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  ArrowLeft,
} from "lucide-react";

import Layout from "../../components/layout/Layout";
import actividades from "../../data/actividades";

function ActividadDetalle() {
  const { id } = useParams();

  const actividad = actividades.find(
    (item) => item.id === Number(id)
  );

  if (!actividad) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 text-center">
            Actividad no encontrada
          </h2>
        </div>
      </Layout>
    );
  }

  const porcentaje = Math.round(
    (actividad.cupos / actividad.capacidad) * 100
  );

  return (
    <Layout>

      {/* Hero */}

      <div className="overflow-hidden rounded-3xl shadow-lg relative">

        <img
          src={actividad.imagen}
          alt={actividad.titulo}
          className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white">

          <Link
            to="/estudiante/actividades"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-4 hover:bg-white/30 transition"
          >
            <ArrowLeft size={18} />
            Volver
          </Link>

          <span className="block w-fit bg-cyan-500 px-4 py-1 rounded-full font-medium mb-4 text-sm">
            {actividad.categoria}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl">
            {actividad.titulo}
          </h1>

        </div>

      </div>

      {/* Contenido */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 sm:mt-10">

        {/* Descripción */}

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6 sm:p-8">

          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Descripción
          </h2>

          <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
            {actividad.descripcion}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

            <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-5">

              <Calendar className="text-cyan-600 flex-shrink-0" />

              <div>

                <p className="text-gray-500 text-sm">
                  Fecha
                </p>

                <h3 className="font-semibold">
                  {actividad.fecha}
                </h3>

              </div>

            </div>

            <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-5">

              <Clock className="text-cyan-600 flex-shrink-0" />

              <div>

                <p className="text-gray-500 text-sm">
                  Hora
                </p>

                <h3 className="font-semibold">
                  {actividad.hora}
                </h3>

              </div>

            </div>

            <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-5">

              <MapPin className="text-cyan-600 flex-shrink-0" />

              <div>

                <p className="text-gray-500 text-sm">
                  Lugar
                </p>

                <h3 className="font-semibold">
                  {actividad.lugar}
                </h3>

              </div>

            </div>

            <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-5">

              <Award className="text-cyan-600 flex-shrink-0" />

              <div>

                <p className="text-gray-500 text-sm">
                  Horas otorgadas
                </p>

                <h3 className="font-semibold">
                  {actividad.horas} horas
                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* Panel lateral */}

        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 h-fit">

          <h2 className="text-xl sm:text-2xl font-bold">
            Información
          </h2>

          <div className="mt-6 flex items-center gap-3">

            <Users className="text-cyan-600 flex-shrink-0" />

            <span className="text-base sm:text-lg">
              {actividad.cupos} de {actividad.capacidad} cupos disponibles
            </span>

          </div>

          <div className="mt-8">

            <div className="flex justify-between mb-2">

              <span className="text-gray-500">
                Disponibilidad
              </span>

              <span className="font-semibold">
                {porcentaje}%
              </span>

            </div>

            <div className="w-full bg-slate-200 rounded-full h-3">

              <div
                className="bg-cyan-500 h-3 rounded-full"
                style={{
                  width: `${porcentaje}%`,
                }}
              />

            </div>

          </div>

          <button className="w-full mt-10 bg-cyan-600 hover:bg-cyan-700 transition text-white font-semibold py-4 rounded-xl">
            Inscribirme
          </button>

        </div>

      </div>

    </Layout>
  );
}

export default ActividadDetalle;