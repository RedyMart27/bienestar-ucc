import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <Layout>

      <h1 className="text-4xl font-bold text-lime-600">
        Dashboard Administrativo
      </h1>

      <p className="mt-2 text-gray-600">
        Bienvenido nuevamente
      </p>

      <div className="mt-10 grid grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-xl font-bold">
            Usuario
          </h2>

          <p className="mt-3">
            {user?.username}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-xl font-bold">
            Rol
          </h2>

          <p className="mt-3 capitalize">
            {user?.rol}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-xl font-bold">
            Estado
          </h2>

          <p className="mt-3 text-green-600">
            Activo
          </p>
        </div>

      </div>

    </Layout>
  );
}

export default Dashboard;