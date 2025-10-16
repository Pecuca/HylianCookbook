// src/components/Header.jsx
import "./Header.css";

function Header({ usuario, onLogout }) {
  return (
    <header className="header">
      <h1 className="titulo">Hylian Cookbook</h1>
      <div className="user-section">
        <span className="usuario">{usuario}</span>
        <button className="logout-button" onClick={onLogout}>
          Log out
        </button>
      </div>
    </header>
  );
}

export default Header;