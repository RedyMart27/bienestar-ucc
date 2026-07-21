import { useMemo, useState } from "react";

import Layout from "../../components/layout/Layout";

import noticias from "../../data/noticias";

import SearchBar from "../../components/common/SearchBar";
import NoticiaGrid from "../../components/informativo/NoticiaGrid";

function Informativo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  const categorias = [
    "Todas",
    "Noticia",
    "Evento",
    "Comunicado",
  ];

  const noticiasFiltradas = useMemo(() => {
    return noticias.filter((noticia) => {
      const coincideBusqueda =
        noticia.titulo
          .toLowerCase()
          .includes(busqueda.toLowerCase()) ||
        noticia.descripcion
          .toLowerCase()
          .includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoria === "Todas" ||
        noticia.categoria === categoria;

      return coincideBusqueda && coincideCategoria;
    });
  }, [busqueda, categoria]);

  const totalNoticias = noticias.filter(
    (n) => n.categoria === "Noticia"
  ).length;

  const totalEventos = noticias.filter(
    (n) => n.categoria === "Evento"
  ).length;

  const totalComunicados = noticias.filter(
    (n) => n.categoria === "Comunicado"
  ).length;

  return (
    <Layout>

      {/* Encabezado */}

      <div className="mb-8 sm:mb-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Informativo
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Consulta las noticias, eventos y comunicados
          publicados por Bienestar Universitario.
        </p>

      </div>

      {/* Tarjetas */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl text-white p-6 shadow-lg hover:shadow-xl transition">

          <p className="text-cyan-100">
            Noticias
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {totalNoticias}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <p className="text-gray-500">
            Eventos
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mt-2">
            {totalEventos}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition sm:col-span-2 xl:col-span-1">

          <p className="text-gray-500">
            Comunicados
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mt-2">
            {totalComunicados}
          </h2>

        </div>

      </div>

      {/* Filtros */}

      <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 mb-8">

        <SearchBar
          value={busqueda}
          onChange={setBusqueda}
          placeholder="Buscar noticias..."
        />

        <div className="flex flex-wrap gap-3 mt-6">

          {categorias.map((item) => (

            <button
              key={item}
              onClick={() => setCategoria(item)}
              className={`px-4 sm:px-5 py-2 rounded-full font-medium transition text-sm sm:text-base ${
                categoria === item
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-cyan-100"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Noticias */}

      <NoticiaGrid
        noticias={noticiasFiltradas}
      />

    </Layout>
  );
}

export default Informativo;