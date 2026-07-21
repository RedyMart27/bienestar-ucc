import ProgramCard from "./ProgramCard";

const ProgramGrid = ({ programas }) => {
  if (!programas.length) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-gray-500">
          No se encontraron programas.
        </h2>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {programas.map((programa) => (
        <ProgramCard key={programa.id} programa={programa} />
      ))}
    </div>
  );
};

export default ProgramGrid;