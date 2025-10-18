import { useState } from "react";
import Boton from "./components/Boton";
import "./components/Auth.css";

/*
  Auth component: handles a minimal username/password flow. It provides
  client-side validation and a toggle to show/hide the password input.

  Behavior notes:
  - Registration stores username/password in localStorage (simple demo only).
  - Login checks the stored credentials against the inputs.
  - Validation rules: username >= 4 chars, password >= 6 chars.
*/
function Auth({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [touchedUsuario, setTouchedUsuario] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      // Register
      localStorage.setItem("usuario", usuario);
      localStorage.setItem("password", password);
      alert("User registered successfully ✅");
      setIsRegister(false); // return to login
      setTouchedUsuario(false);
      setTouchedPassword(false);
    } else {
      // Login
      const userGuardado = localStorage.getItem("usuario");
      const passGuardado = localStorage.getItem("password");

      if (usuario === userGuardado && password === passGuardado) {
        localStorage.setItem("isLoggedIn", "true");
        onLogin(usuario);
      } else {
        setError("Username or password incorrect ❌");
      }
    }
  };


  const isUsuarioValid = usuario.trim().length >= 4;
  const isPasswordValid = password.length >= 6;
  const isValid = isUsuarioValid && isPasswordValid;

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2 className="auth-title">{isRegister ? "Register" : "Sign In"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="auth-usuario">Username</label>
          <div className="input-with-indicator">
            <input
              id="auth-usuario"
              type="text"
              placeholder="Username"
              value={usuario}
              onChange={(e) => { setUsuario(e.target.value); if (!touchedUsuario) setTouchedUsuario(true); }}
              onBlur={() => setTouchedUsuario(true)}
              required
            />
            {isUsuarioValid && <span className="valid-dot" aria-hidden="true" />}
          </div>
          {touchedUsuario && !isUsuarioValid && (
            <div className="field-error">Username must be at least 4 characters.</div>
          )}

          <label htmlFor="auth-password">Password</label>
          <div className="input-with-indicator password-field">
            <input
              id="auth-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); if (!touchedPassword) setTouchedPassword(true); }}
              onBlur={() => setTouchedPassword(true)}
              required
            />
            {isPasswordValid && <span className="valid-dot" aria-hidden="true" />}
            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
              {/* eye / eye-off SVGs */}
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 3L21 21" stroke="#fefddf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.58 10.58A3 3 0 0013.42 13.42" stroke="#fefddf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#fefddf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="#fefddf" strokeWidth="1.5"/>
                </svg>
              )}
            </button>
          </div>
          {touchedPassword && !isPasswordValid && (
            <div className="field-error">Password must be at least 6 characters.</div>
          )}

          {error && <p className="auth-error">{error}</p>}

          <div className="auth-help">
            <div>Username: min 4 characters. Password: min 6 characters.</div>
          </div>

          <div className="auth-actions">
            <Boton type="submit" disabled={!isValid}>{isRegister ? "Register" : "Sign in"}</Boton>
          </div>

          <div style={{ height: 8 }} />

          <div className="auth-toggle-center">
            <Boton type="button" onClick={() => { setIsRegister(!isRegister); setTouchedUsuario(false); setTouchedPassword(false); }}>{isRegister ? "Sign in" : "Register"}</Boton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;