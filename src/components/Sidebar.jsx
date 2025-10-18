import "./Sidebar.css";
import Boton from "./Boton";

// Sidebar: left-side panel that exposes navigation controls and user actions.
// The sidebar contains view selectors and the "Add recipe" button. It keeps
// visual/state responsibilities small and delegates actions through passed
// callbacks.
// Props:
// - usuario: username string to display
// - onLogout: function to call when user clicks log out
// - vista: current active view (lista|grid|carrusel|tabla)
// - setVista(view): function to change the view
// - setMostrarPopup(true): function to open the add/edit popup
function Sidebar({ usuario, onLogout, vista, setVista, setMostrarPopup }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="titulo">
          Hylian <br /> Cookbook
        </h1>
      </div>

      <div className="sidebar-controls">
        <div className="vista-buttons">
          <Boton onClick={() => setVista("lista")} activo={vista === "lista"}>List</Boton>
          <Boton onClick={() => setVista("grid")} activo={vista === "grid"}>Grid</Boton>
          <Boton onClick={() => setVista("carrusel")} activo={vista === "carrusel"}>Carousel</Boton>
          <Boton onClick={() => setVista("tabla")} activo={vista === "tabla"}>Table</Boton>
        </div>

        <div className="add-section">
          <Boton className="agregar-sidebar" onClick={() => setMostrarPopup(true)}>Add recipe</Boton>
        </div>
      </div>

      <div className="user-section">
        <span style={{ color: "white" }} className="usuario">{usuario}</span>
        <button className="logout-button" onClick={onLogout}>
          Log out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;