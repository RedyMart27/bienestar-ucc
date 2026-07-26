import { useEffect, useMemo, useState } from "react";

import Layout from "../../components/layout/Layout";

import SearchBar from "../../components/common/SearchBar";
import SelectFilter from "../../components/common/SelectFilter";
import CategoryTabs from "../../components/common/CategoryTabs";
import ActividadGrid from "../../components/actividades/ActividadGrid";

import { getActividades } from "../../services/actividadesService";

function Actividades() {
  const [actividades, setActividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [orden, setOrden] = useState("recientes");

  useEffect(() => {
    const cargarActividades = async () => {
      try {
        const data = await getActividades();
        setActividades(data);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las actividades.");
      } finally {
        setLoading(false);
      }
    };

    cargarActividades();
  }, []);

  const categorias = [
    "Todas",
    ...new Set(actividades.map((actividad) => actividad.categoria)),
  ];

  const actividadesFiltradas = useMemo(() => {
    let resultado = actividades.filter((actividad) => {
      const coincideBusqueda =
        actividad.titulo
          .toLowerCase()
          .includes(busqueda.toLowerCase()) ||
        actividad.descripcion
          .toLowerCase()
          .includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoria === "Todas" ||
        actividad.categoria === categoria;

      return coincideBusqueda && coincideCategoria;
    });

    switch (orden) {
      case "horas":
        resultado.sort((a, b) => b.horas - a.horas);
        break;

      case "cupos":
        resultado.sort((a, b) => b.cupos - a.cupos);
        break;

      case "alfabetico":
        resultado.sort((a, b) =>
          a.titulo.localeCompare(b.titulo)
        );
        break;

      default:
        resultado.sort((a, b) => a.id - b.id);
        break;
    }

    return resultado;
  }, [actividades, busqueda, categoria, orden]);

  const totalHoras = actividades.reduce(
    (total, actividad) => total + Number(actividad.horas || 0),
    0
  );

  const totalCupos = actividades.reduce(
    (total, actividad) => total + Number(actividad.cupos || 0),
    0
  );

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Actividades disponibles
        </h1>

        <p className="text-gray-500 mt-2">
          Explora todas las actividades organizadas por
          Bienestar Universitario y participa para acumular
          horas lúdicas.
        </p>

        <p className="mt-3 text-cyan-700 font-medium">
          {actividadesFiltradas.length} actividades encontradas ·
          Semestre 2026-2
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-6 shadow-lg">
          <p className="text-cyan-100 text-sm">
            Actividades disponibles
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {actividades.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white shadow-md p-6">
          <p className="text-gray-500 text-sm">
            Horas disponibles
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mt-2">
            {totalHoras}
          </h2>
        </div>

        <div className="rounded-2xl bg-white shadow-md p-6">
          <p className="text-gray-500 text-sm">
            Cupos disponibles
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mt-2">
            {totalCupos}
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <SearchBar
            value={busqueda}
            onChange={setBusqueda}
            placeholder="Buscar actividades..."
          />

          <SelectFilter
            value={orden}
            onChange={setOrden}
          />
        </div>

        <CategoryTabs
          categoria={categoria}
          setCategoria={setCategoria}
          categorias={categorias}
        />
      </div>

      {loading ? (
        <div className="bg-white rounded-2xl shadow-md p-10 text-center">
          <h2 className="text-xl font-semibold">
            Cargando actividades...
          </h2>
        </div>
      ) : error ? (
        <div className="bg-white rounded-2xl shadow-md p-10 text-center">
          <h2 className="text-2xl font-bold text-red-600">
            Ocurrió un error
          </h2>

          <p className="text-gray-500 mt-3">
            {error}
          </p>
        </div>
      ) : (
        <ActividadGrid actividades={actividadesFiltradas} />
      )}
    </Layout>
  );
}

export default Actividades;