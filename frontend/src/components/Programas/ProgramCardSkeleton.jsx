function ProgramCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">

      {/* Imagen */}
      <div className="h-56 bg-slate-200"></div>

      {/* Contenido */}
      <div className="p-6">

        <div className="w-24 h-6 bg-slate-200 rounded-full mb-5"></div>

        <div className="h-7 bg-slate-200 rounded w-3/4 mb-4"></div>

        <div className="space-y-2 mb-6">
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          <div className="h-4 bg-slate-200 rounded w-2/3"></div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
          <div className="h-4 bg-slate-200 rounded w-2/3"></div>
          <div className="h-4 bg-slate-200 rounded w-1/3"></div>
        </div>

        <div className="h-12 bg-slate-200 rounded-xl"></div>

      </div>

    </div>
  );
}

export default ProgramCardSkeleton;