import ProgramCard from "./ProgramCard";

function ProgramGrid({ programas }) {
  if (!programas.length) {
    return (
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-12">

        <div className="flex flex-col items-center text-center max-w-xl mx-auto">

          <div className="w-24 h-24 rounded-full bg-cyan-100 flex items-center justify-center mb-6">

            <span className="text-5xl">
              📚
            </span>

          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            No se encontraron programas
          </h2>

          <p className="text-gray-500 leading-7">
            No hay programas disponibles con los filtros seleccionados.
          </p>

          <p className="text-gray-500 leading-7">
            Intenta cambiar la categoría o realizar una nueva búsqueda.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

      {programas.map((programa) => (
        <ProgramCard
          key={programa.id}
          programa={programa}
        />
      ))}

    </div>
  );
}

export default ProgramGrid;