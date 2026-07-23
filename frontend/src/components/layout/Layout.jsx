import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {children}
      </main>

    </div>
  );
}

export default Layout;