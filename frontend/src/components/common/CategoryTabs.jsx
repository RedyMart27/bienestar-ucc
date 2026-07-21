const categorias = [
  "Todas",
  "Bienestar",
  "Cultural",
  "Deportiva",
  "Lúdica",
];

function CategoryTabs({ categoria, setCategoria }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {categorias.map((item) => (
        <button
          key={item}
          onClick={() => setCategoria(item)}
          className={`px-5 py-2 rounded-full font-medium transition-all ${
            categoria === item
              ? "bg-cyan-600 text-white shadow"
              : "bg-white text-slate-600 border hover:bg-cyan-50"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;