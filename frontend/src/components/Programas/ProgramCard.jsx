import { Link } from "react-router-dom";

function ProgramCard({ programa }) {

  const imagen =
    programa.imagen
      ? `http://localhost:8000${programa.imagen}`
      : "https://via.placeholder.com/600x350?text=Programa";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Imagen */}

      <div className="relative">

        <img
          src={imagen}
          alt={programa.nombre_display}
          className="w-full h-56 object-cover"
        />

        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
            programa.activo
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {programa.activo ? "Activo" : "Inactivo"}
        </span>

      </div>

      {/* Contenido */}

      <div className="p-5">

        <h2 className="text-xl font-bold text-slate-800">
          {programa.nombre_display}
        </h2>

        <p className="text-gray-500 text-sm mt-3 line-clamp-3">
          {programa.descripcion}
        </p>

        <Link
          to={`/estudiante/programas/${programa.id}`}
          className="mt-6 w-full inline-flex justify-center items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl py-3 transition"
        >
          Ver detalles
        </Link>

      </div>

    </div>
  );
}

export default ProgramCard;