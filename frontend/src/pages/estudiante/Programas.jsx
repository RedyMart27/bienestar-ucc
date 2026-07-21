import { useState } from "react";

import programas from "../../data/programas";

import ProgramGrid from "../../components/programas/ProgramGrid";
import SearchBar from "../../components/common/SearchBar";

const Programas = () => {
  const [busqueda, setBusqueda] = useState("");

  const programasFiltrados = programas.filter((programa) =>
    programa.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    programa.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-[#003B71] mb-3">
        Programas de Bienestar
      </h1>

      <p className="text-gray-600 mb-8">
        Descubre todas las actividades disponibles para acumular horas lúdicas.
      </p>

      <SearchBar
        value={busqueda}
        onChange={setBusqueda}
        placeholder="Buscar programa..."
      />

      <ProgramGrid programas={programasFiltrados} />

    </div>
  );
};

export default Programas;