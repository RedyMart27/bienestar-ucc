import { Search } from "lucide-react";

function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="relative flex-1">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>
  );
}

export default SearchBar;