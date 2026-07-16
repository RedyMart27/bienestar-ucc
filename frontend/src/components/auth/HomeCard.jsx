import logo from "../../assets/images/logo-ucc.png";

function HomeCard() {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fadeIn">

      {/* Logo */}
      <div className="w-28 h-28 rounded-3xl bg-cyan-100 shadow-lg flex items-center justify-center">

        <img
          src={logo}
          alt="Logo Bienestar UCC"
          className="w-20 h-20 object-contain"
        />

      </div>

      {/* Título */}
      <h1 className="mt-10 text-5xl font-bold text-slate-800 text-center">
        Bienvenido al sistema
      </h1>

      {/* Descripción */}
      <p className="mt-6 text-xl text-slate-500 text-center max-w-lg leading-relaxed">
        Selecciona tu tipo de acceso para continuar.
      </p>

    </div>
  );
}

export default HomeCard;