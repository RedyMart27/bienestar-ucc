import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Newspaper,
} from "lucide-react";

import Layout from "../../components/layout/Layout";
import noticias from "../../data/noticias";

function NoticiaDetalle() {

  const { id } = useParams();

  const noticia = noticias.find(
    (item) => item.id === Number(id)
  );

  if (!noticia) {
    return (
      <Layout>

        <div className="flex justify-center items-center py-24">

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 text-center">
            Noticia no encontrada
          </h2>

        </div>

      </Layout>
    );
  }

  return (
    <Layout>

      <Link
        to="/estudiante/informativo"
        className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium mb-6 sm:mb-8"
      >
        <ArrowLeft size={18} />
        Volver al informativo
      </Link>

      {/* Imagen */}

      <div className="overflow-hidden rounded-3xl shadow-lg">

        <img
          src={noticia.imagen}
          alt={noticia.titulo}
          className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
        />

      </div>

      {/* Contenido */}

      <div className="bg-white rounded-3xl shadow-lg mt-6 sm:mt-8 p-6 sm:p-8 lg:p-10">

        <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-semibold text-sm">
          {noticia.categoria}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-6">
          {noticia.titulo}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-6 text-gray-500">

          <div className="flex items-center gap-2">

            <Calendar size={18} />

            {noticia.fecha}

          </div>

          <div className="flex items-center gap-2">

            <Newspaper size={18} />

            Bienestar Universitario

          </div>

        </div>

        <div className="mt-8 sm:mt-10 space-y-6 leading-7 sm:leading-8 text-gray-700 text-base sm:text-lg">

          <p>
            {noticia.descripcion}
          </p>

          <p>
            Esta información hace parte del módulo informativo del sistema
            de Bienestar Universitario. Aquí se publicarán noticias,
            convocatorias, eventos, campañas institucionales y comunicados
            dirigidos a toda la comunidad universitaria.
          </p>

          <p>
            En las próximas versiones esta información será obtenida desde
            la base de datos del sistema, permitiendo que el personal
            administrativo publique contenido actualizado en tiempo real.
          </p>

        </div>

      </div>

    </Layout>
  );
}

export default NoticiaDetalle;