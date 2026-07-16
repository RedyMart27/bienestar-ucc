import { GraduationCap, Shield, Sun } from "lucide-react";

function RoleTabs({ role, setRole }) {
  const tabs = [
    {
      id: "student",
      label: "Estudiante",
      icon: <GraduationCap size={18} />,
      color: "border-cyan-500 text-cyan-600",
    },
    {
      id: "admin",
      label: "Administrativo",
      icon: <Shield size={18} />,
      color: "border-lime-500 text-lime-600",
    },
    {
      id: "superadmin",
      label: "Super Admin",
      icon: <Sun size={18} />,
      color: "border-yellow-500 text-yellow-600",
    },
  ];

  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setRole(tab.id)}
          className={`flex-1 flex items-center justify-center gap-2 py-5 font-semibold transition-all border-b-4 ${
            role === tab.id
              ? `${tab.color} bg-white`
              : "border-transparent text-gray-500 hover:bg-gray-50"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default RoleTabs;