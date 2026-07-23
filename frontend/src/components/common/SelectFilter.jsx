function SelectFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
    >
      <option value="recientes">
        Más recientes
      </option>

      <option value="horas">
        Más horas
      </option>

      <option value="cupos">
        Más cupos
      </option>

      <option value="alfabetico">
        A - Z
      </option>
    </select>
  );
}

export default SelectFilter;