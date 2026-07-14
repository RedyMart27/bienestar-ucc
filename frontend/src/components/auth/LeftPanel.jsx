import { GraduationCap, Shield, Sun } from "lucide-react";
import logo from "../../assets/images/logo-ucc.png";

function LeftPanel() {
  return (
    <div className="relative w-1/2 overflow-hidden bg-[#0891b2] text-white">

      {/* Círculos decorativos */}
      <div className="absolute -top-32 right-[-120px] w-96 h-96 rounded-full bg-cyan-400 opacity-20"></div>

      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-cyan-500 opacity-20"></div>

      <div className="flex flex-col justify-between h-screen px-14 py-14">

        <div>

          {/* Logo */}

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 rounded-xl"
            />

            <div>

              <p className="text-yellow-300 font-bold uppercase">
                Bienestar
              </p>

              <h2 className="text-3xl font-bold">
                Universitario
              </h2>

            </div>

          </div>

          {/* Texto */}

          <div className="mt-14">

            <h1 className="text-6xl font-bold leading-tight">

              Plataforma de
              <br />
              Bienestar Universitario

            </h1>

            <p className="mt-8 text-2xl text-cyan-100 leading-relaxed">

              Gestiona actividades lúdicas,
              deportivas y culturales.

              <br />

              Conecta con la comunidad UCC
              desde cualquier sede.

            </p>

          </div>

          {/* Tarjetas */}

          <div className="mt-20 space-y-6">

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex items-center gap-5 border border-white/10">

              <div className="bg-white rounded-2xl p-4">

                <GraduationCap
                  className="text-cyan-600"
                  size={28}
                />

              </div>

              <div>

                <h3 className="font-bold text-2xl">

                  Estudiante

                </h3>

                <p className="text-cyan-100">

                  Accede a actividades,
                  horas lúdicas y certificados

                </p>

              </div>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex items-center gap-5 border border-white/10">

              <div className="bg-lime-100 rounded-2xl p-4">

                <Shield
                  className="text-lime-700"
                  size={28}
                />

              </div>

              <div>

                <h3 className="font-bold text-2xl">

                  Administrativo

                </h3>

                <p className="text-cyan-100">

                  Gestión de actividades
                  y reportes

                </p>

              </div>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex items-center gap-5 border border-white/10">

              <div className="bg-yellow-100 rounded-2xl p-4">

                <Sun
                  className="text-yellow-600"
                  size={28}
                />

              </div>

              <div>

                <h3 className="font-bold text-2xl">

                  Super Admin

                </h3>

                <p className="text-cyan-100">

                  Configuración
                  y permisos

                </p>

              </div>

            </div>

          </div>

        </div>

        <p className="text-cyan-200">

          © 2026 Universidad Cooperativa de Colombia

        </p>

      </div>

    </div>
  );
}

export default LeftPanel;