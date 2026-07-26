import ProgramaForm from "./ProgramaForm";

function ProgramaModal({
  open,
  onClose,
  onSubmit,
  loading,
  programa,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 relative">

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold mb-6">
          {programa ? "Editar Programa" : "Nuevo Programa"}
        </h2>

        <ProgramaForm
          programa={programa}
          onSubmit={onSubmit}
          loading={loading}
        />

      </div>

    </div>
  );
}

export default ProgramaModal;