import { Link } from "react-router-dom";

const ProgramCard = ({ programa }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={programa.imagen}
        alt={programa.titulo}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          {programa.categoria}
        </span>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {programa.titulo}
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {programa.descripcion}
        </p>

        <div className="space-y-1 text-sm text-gray-500 mb-5">
          <p>
            <strong>📅 Fecha:</strong> {programa.fecha}
          </p>

          <p>
            <strong>📍 Lugar:</strong> {programa.lugar}
          </p>

          <p>
            <strong>⏳ Horas:</strong> {programa.horas}
          </p>
        </div>

        <Link
          to={`/estudiante/programas/${programa.id}`}
          className="block text-center bg-[#003B71] hover:bg-[#002c56] text-white font-semibold py-2 rounded-lg transition"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;