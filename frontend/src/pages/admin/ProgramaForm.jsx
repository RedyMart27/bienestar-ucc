import { useState } from "react";

function ProgramaForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    imagen: null,
    activo: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("nombre", formData.nombre);
    data.append("descripcion", formData.descripcion);
    data.append("activo", formData.activo);

    if (formData.imagen) {
      data.append("imagen", formData.imagen);
    }

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label className="block mb-2 font-medium">
          Programa
        </label>

        <select
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full border rounded-xl p-3"
        >
          <option value="">Seleccione...</option>
          <option value="armonia">En Armonía Contigo</option>
          <option value="enlace">Enlace</option>
          <option value="cultura">Gestión de Cultura Universitaria</option>
          <option value="deporte">Deporte y Recreación</option>
          <option value="arte">Arte y Cultura</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Descripción
        </label>

        <textarea
          name="descripcion"
          rows="4"
          required
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Imagen
        </label>

        <input
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="activo"
          checked={formData.activo}
          onChange={handleChange}
        />

        <label>
          Programa activo
        </label>
      </div>

      <button
        disabled={loading}
        className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-xl"
      >
        {loading ? "Guardando..." : "Guardar Programa"}
      </button>

    </form>
  );
}

export default ProgramaForm;