import { useState } from "react";

function Auth({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      // Registro
      localStorage.setItem("usuario", usuario);
      localStorage.setItem("password", password);
      alert("Usuario registrado con éxito ✅");
      setIsRegister(false); // volver a login
    } else {
      // Login
      const userGuardado = localStorage.getItem("usuario");
      const passGuardado = localStorage.getItem("password");

      if (usuario === userGuardado && password === passGuardado) {
        localStorage.setItem("isLoggedIn", "true");
        onLogin();
      } else {
        setError("Usuario o contraseña incorrectos ❌");
      }
    }
  };

  return (
    <div>
      <h2>{isRegister ? "Registro" : "Iniciar Sesión"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isRegister ? "Registrar" : "Entrar"}</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Inicia sesión" : "Regístrate"}
        </button>
      </p>
    </div>
  );
}

export default Auth;