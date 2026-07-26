import { useEffect, useMemo, useState } from "react";

import {
  BookOpen,
  Layers3,
} from "lucide-react";

import Layout from "../../components/layout/Layout";

import SearchBar from "../../components/common/SearchBar";
import CategoryTabs from "../../components/common/CategoryTabs";

import ProgramGrid from "../../components/programas/ProgramGrid";
import ProgramGridSkeleton from "../../components/programas/ProgramGridSkeleton";

import { getProgramas } from "../../services/programasService";

function Programas() {

  const [programas, setProgramas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  useEffect(() => {

    const cargarProgramas = async () => {

      try {

        const data = await getProgramas();

        setProgramas(data);

      } catch (err) {

        console.error(err);

        setError("No se pudieron cargar los programas.");

      } finally {

        setLoading(false);

      }

    };

    cargarProgramas();

  }, []);

  // Como el backend no tiene categorías,
  // solo dejamos "Todas"
  const categorias = ["Todas"];

  const programasFiltrados = useMemo(() => {

    return programas.filter((programa) => {

      const textoBusqueda = busqueda.toLowerCase();

      const coincideBusqueda =

        (programa.nombre_display ?? "")
          .toLowerCase()
          .includes(textoBusqueda)

        ||

        (programa.descripcion ?? "")
          .toLowerCase()
          .includes(textoBusqueda);

      return coincideBusqueda;

    });

  }, [programas, busqueda]);

  return (
    <Layout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Programas de Bienestar
        </h1>

        <p className="text-gray-500 mt-2">
          Explora todos los programas ofrecidos por Bienestar
          Universitario y descubre nuevas oportunidades para
          participar.
        </p>

        <p className="mt-3 text-cyan-700 font-medium">
          {programasFiltrados.length} programas encontrados
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-6 shadow-lg">

          <BookOpen
            size={34}
            className="mb-4"
          />

          <p className="text-cyan-100 text-sm">
            Programas disponibles
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {programas.length}
          </h2>

        </div>

        <div className="rounded-2xl bg-white shadow-md p-6">

          <Layers3
            size={34}
            className="text-cyan-600 mb-4"
          />

          <p className="text-gray-500 text-sm">
            Categorías
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mt-2">
            1
          </h2>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

        <SearchBar
          value={busqueda}
          onChange={setBusqueda}
          placeholder="Buscar programas..."
        />

        <CategoryTabs
          categoria={categoria}
          setCategoria={setCategoria}
          categorias={categorias}
        />

      </div>

      {loading ? (

        <ProgramGridSkeleton />

      ) : error ? (

        <div className="bg-white rounded-3xl shadow-md p-12 text-center">

          <h2 className="text-2xl font-bold text-red-600">
            Ocurrió un error
          </h2>

          <p className="text-gray-500 mt-4">
            {error}
          </p>

        </div>

      ) : (

        <ProgramGrid programas={programasFiltrados} />

      )}

    </Layout>
  );
}

export default Programas;