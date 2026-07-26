import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  XCircle,
} from "lucide-react";

import Layout from "../../components/layout/Layout";
import { getPrograma } from "../../services/programasService";

function ProgramaDetalle() {
  const { id } = useParams();

  const [programa, setPrograma] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarPrograma = async () => {
      try {
        const data = await getPrograma(id);
        setPrograma(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar el programa.");
      } finally {
        setLoading(false);
      }
    };

    cargarPrograma();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="animate-pulse space-y-6">
          <div className="h-80 rounded-3xl bg-gray-200"></div>
          <div className="h-10 w-1/2 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !programa) {
    return (
      <Layout>
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">⚠️</span>
          </div>

          <h2 className="text-3xl font-bold text-red-600">
            Programa no encontrado
          </h2>

          <p className="text-gray-500 mt-4">
            {error || "No existe información para este programa."}
          </p>

          <Link
            to="/estudiante/programas"
            className="inline-flex items-center gap-2 mt-8 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl"
          >
            <ArrowLeft size={18} />
            Volver
          </Link>

        </div>
      </Layout>
    );
  }

  const imagen = programa.imagen
    ? `http://localhost:8000${programa.imagen}`
    : "https://via.placeholder.com/1200x500?text=Programa";

  return (
    <Layout>

      <Link
        to="/estudiante/programas"
        className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium mb-6"
      >
        <ArrowLeft size={18} />
        Volver a Programas
      </Link>

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

        <img
          src={imagen}
          alt={programa.nombre_display}
          className="w-full h-96 object-cover"
        />

        <div className="p-8">

          <div className="flex items-center justify-between">

            <h1 className="text-4xl font-bold text-slate-800">
              {programa.nombre_display}
            </h1>

            <span
              className={`px-4 py-2 rounded-full font-semibold ${
                programa.activo
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {programa.activo ? "Activo" : "Inactivo"}
            </span>

          </div>

          <p className="text-gray-600 mt-6 leading-8">
            {programa.descripcion}
          </p>

          <div className="mt-10 rounded-2xl bg-cyan-50 border border-cyan-100 p-6">

            <div className="flex items-center gap-3 mb-5">

              <BookOpen
                className="text-cyan-700"
                size={28}
              />

              <h2 className="text-2xl font-bold">
                Información del programa
              </h2>

            </div>

            <div className="flex items-center gap-3">

              {programa.activo ? (

                <>
                  <CheckCircle className="text-green-600" />
                  <span className="text-green-700 font-medium">
                    Este programa se encuentra disponible.
                  </span>
                </>

              ) : (

                <>
                  <XCircle className="text-red-600" />
                  <span className="text-red-700 font-medium">
                    Este programa no se encuentra disponible actualmente.
                  </span>
                </>

              )}

            </div>

            <p className="text-gray-600 mt-6 leading-8">
              {programa.descripcion}
            </p>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default ProgramaDetalle;