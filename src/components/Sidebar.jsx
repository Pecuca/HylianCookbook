// src/components/Sidebar.jsx
import "./Sidebar.css";

function Sidebar({ usuario, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="titulo">
          Hylian <br /> Cookbook
        </h1>
      </div>

      <div className="user-section">
        <span className="usuario">{usuario}</span>
        <button className="logout-button" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;