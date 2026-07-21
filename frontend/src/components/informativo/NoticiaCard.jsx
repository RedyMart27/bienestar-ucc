import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

function NoticiaCard({ noticia }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={noticia.imagen}
        alt={noticia.titulo}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-medium px-3 py-1 rounded-full">
          {noticia.categoria}
        </span>

        <h2 className="text-2xl font-bold text-slate-800 mt-4">
          {noticia.titulo}
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          {noticia.descripcion}
        </p>

        <div className="flex items-center justify-between mt-6">

          <div className="flex items-center gap-2 text-gray-500">

            <Calendar size={18} />

            <span>{noticia.fecha}</span>

          </div>

          <Link
            to={`/estudiante/informativo/${noticia.id}`}
            className="flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition"
          >
            Leer más

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </article>
  );
}

export default NoticiaCard;