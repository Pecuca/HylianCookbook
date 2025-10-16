import { useState } from "react";
import Auth from "./Auth";
import Recetas from "./Recetas";
import Header from "./components/Header";

function App() {
  const [usuario, setUsuario] = useState(localStorage.getItem("usuario") || "");
  const [logueado, setLogueado] = useState(!!usuario);

  const handleLogin = (nombreUsuario) => {
    setUsuario(nombreUsuario);
    setLogueado(true);
    localStorage.setItem("usuario", nombreUsuario);
  };

  const handleLogout = () => {
    setUsuario("");
    setLogueado(false);
    localStorage.removeItem("usuario");
  };

  return (
  <>
    {/* Fondo con blur */}
    <div className="blur-overlay" />

    {/* Contenido principal */}
    <div className="contenido">
      {logueado ? (
        <>
          <Header usuario={usuario} onLogout={handleLogout} />
          <Recetas />
        </>
      ) : (
        <Auth onLogin={handleLogin} />
      )}
    </div>
  </>
);
}

export default App;