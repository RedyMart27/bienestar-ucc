import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
} from "lucide-react";

function ActividadCard({ actividad }) {
  const porcentaje = Math.round(
    (actividad.cupos / actividad.capacidad) * 100
  );

  const colores = {
    Bienestar: "bg-emerald-500",
    Cultural: "bg-sky-500",
    Deportiva: "bg-indigo-500",
    Lúdica: "bg-amber-500",
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Imagen */}
      <div className="relative">

        <img
          src={actividad.imagen}
          alt={actividad.titulo}
          className="w-full h-56 object-cover"
        />

        <span
          className={`absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full ${
            colores[actividad.categoria]
          }`}
        >
          {actividad.categoria}
        </span>

        <span className="absolute top-4 right-4 bg-white text-slate-700 text-sm font-bold px-3 py-1 rounded-full shadow">
          {actividad.horas}h
        </span>

      </div>

      {/* Contenido */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-slate-800">
          {actividad.titulo}
        </h2>

        <p className="text-gray-500 text-sm mt-3 line-clamp-2">
          {actividad.descripcion}
        </p>

        <div className="mt-5 space-y-3 text-sm">

          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={16} />
            <span>
              {actividad.fecha} • {actividad.hora}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} />
            <span>{actividad.lugar}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} />
            <span>
              {actividad.cupos} / {actividad.capacidad} cupos
            </span>
          </div>

        </div>

        {/* Barra de progreso */}

        <div className="mt-6">

          <div className="flex justify-between text-sm font-medium mb-2">
            <span>Disponibilidad</span>
            <span>{porcentaje}%</span>
          </div>

          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-500 rounded-full"
              style={{
                width: `${porcentaje}%`,
              }}
            />
          </div>

        </div>

        <Link
          to={`/estudiante/actividades/${actividad.id}`}
          className="mt-6 w-full inline-flex justify-center items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl py-3 transition"
        >
          Ver detalles
        </Link>

      </div>

    </div>
  );
}

export default ActividadCard;