import { useState, useEffect } from "react";
import Auth from "./Auth.jsx";
import Recetas from "./Recetas.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>🍲 Bienvenido a tu App de Recetas</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <Recetas />
        </>
      ) : (
        <Auth onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;