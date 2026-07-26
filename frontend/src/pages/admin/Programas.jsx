import { useEffect, useState } from "react";

import Layout from "../../components/layout/Layout";
import ProgramaTable from "../../components/admin/ProgramaTable";
import ProgramaModal from "../../components/admin/ProgramaModal";

import {
  getProgramas,
  crearPrograma,
  editarPrograma,
} from "../../services/programasService";

function Programas() {
  const [programas, setProgramas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [saving, setSaving] = useState(false);

  // Programa seleccionado para editar
  const [programaSeleccionado, setProgramaSeleccionado] = useState(null);

  useEffect(() => {
    cargarProgramas();
  }, []);

  const cargarProgramas = async () => {
    try {
      setLoading(true);

      const data = await getProgramas();

      setProgramas(data);
    } catch (error) {
      console.error("Error al obtener programas:", error);
    } finally {
      setLoading(false);
    }
  };

  // Crear o editar
  const handleGuardarPrograma = async (data) => {
    try {
      setSaving(true);

      if (programaSeleccionado) {
        await editarPrograma(programaSeleccionado.id, data);
      } else {
        await crearPrograma(data);
      }

      setOpenModal(false);
      setProgramaSeleccionado(null);

      await cargarProgramas();
    } catch (error) {
      console.error(error);
      alert("No fue posible guardar el programa.");
    } finally {
      setSaving(false);
    }
  };

  // Abrir modal para editar
  const handleEditar = (programa) => {
    setProgramaSeleccionado(programa);
    setOpenModal(true);
  };

  // Abrir modal para crear
  const handleNuevoPrograma = () => {
    setProgramaSeleccionado(null);
    setOpenModal(true);
  };

  const handleEliminar = (programa) => {
    console.log("Eliminar:", programa);
  };

  return (
    <Layout>
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-lime-600">
            Gestión de Programas
          </h1>

          <p className="mt-2 text-gray-500">
            Administra todos los programas institucionales.
          </p>
        </div>

        <button
          onClick={handleNuevoPrograma}
          className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          + Nuevo Programa
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <ProgramaTable
          programas={programas}
          loading={loading}
          onEditar={handleEditar}
          onEliminar={handleEliminar}
        />

      </div>

      <ProgramaModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setProgramaSeleccionado(null);
        }}
        onSubmit={handleGuardarPrograma}
        loading={saving}
        programa={programaSeleccionado}
      />

    </Layout>
  );
}

export default Programas;