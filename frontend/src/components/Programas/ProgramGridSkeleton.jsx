import ProgramCardSkeleton from "./ProgramCardSkeleton";

function ProgramGridSkeleton() {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <ProgramCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default ProgramGridSkeleton;