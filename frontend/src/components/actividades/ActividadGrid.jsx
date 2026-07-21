import ActividadCard from "./ActividadCard";

function ActividadGrid({ actividades }) {
  if (!actividades.length) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow">
        <h2 className="text-2xl font-semibold text-slate-700">
          No se encontraron actividades
        </h2>

        <p className="text-gray-500 mt-2">
          Intenta cambiar los filtros o realizar otra búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {actividades.map((actividad) => (
        <ActividadCard
          key={actividad.id}
          actividad={actividad}
        />
      ))}
    </div>
  );
}

export default ActividadGrid;