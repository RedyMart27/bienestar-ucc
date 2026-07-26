function ProgramaTable({
  programas,
  loading,
  onEditar,
  onEliminar,
}) {
  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Cargando programas...
      </div>
    );
  }

  if (programas.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No hay programas registrados.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">

      <table className="min-w-full divide-y divide-gray-200">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-6 py-3 text-left text-xs font-bold uppercase">
              Imagen
            </th>

            <th className="px-6 py-3 text-left text-xs font-bold uppercase">
              Programa
            </th>

            <th className="px-6 py-3 text-left text-xs font-bold uppercase">
              Descripción
            </th>

            <th className="px-6 py-3 text-left text-xs font-bold uppercase">
              Estado
            </th>

            <th className="px-6 py-3 text-center text-xs font-bold uppercase">
              Acciones
            </th>

          </tr>

        </thead>

        <tbody className="bg-white divide-y divide-gray-200">

          {programas.map((programa) => {

            const imagen = programa.imagen
              ? `http://localhost:8000${programa.imagen}`
              : null;

            return (

              <tr key={programa.id}>

                <td className="px-6 py-4">

                  {imagen ? (

                    <img
                      src={imagen}
                      alt={programa.nombre_display}
                      className="w-16 h-16 rounded-lg object-cover border"
                    />

                  ) : (

                    <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                      Sin imagen
                    </div>

                  )}

                </td>

                <td className="px-6 py-4 font-semibold">
                  {programa.nombre_display}
                </td>

                <td className="px-6 py-4 max-w-sm">
                  <p className="line-clamp-2">
                    {programa.descripcion}
                  </p>
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      programa.activo
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {programa.activo ? "Activo" : "Inactivo"}
                  </span>

                </td>

                <td className="px-6 py-4 text-center space-x-3">

                  <button
                    onClick={() => onEditar(programa)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => onEliminar(programa)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Eliminar
                  </button>

                </td>

              </tr>

            );

          })}

        </tbody>

      </table>

    </div>
  );
}

export default ProgramaTable;