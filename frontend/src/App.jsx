import AppRouter from "./routes/AppRouter";
import { useAuth } from "./context/AuthContext";

function App() {
  const { loading } = useAuth();

  // Esperar mientras se carga la sesión almacenada
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-3xl font-bold text-cyan-600">
          Cargando...
        </h1>
      </div>
    );
  }

  return <AppRouter />;
}

export default App;