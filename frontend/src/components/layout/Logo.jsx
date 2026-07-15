import logo from "../../assets/images/logo-bienestar.png";

function Logo() {
  return (
    <div className="flex items-center gap-3">

      <img
        src={logo}
        alt="Bienestar UCC"
        className="w-12 h-12 object-contain"
      />

      <div>
        <h1 className="text-lg font-bold text-slate-800">
          Bienestar UCC
        </h1>

        <p className="text-sm text-slate-500">
          Universidad Cooperativa
        </p>
      </div>

    </div>
  );
}

export default Logo;