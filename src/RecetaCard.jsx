// src/RecetaCard.jsx
import Boton from "./components/Boton";
import "./components/RecetaCard.css";

function RecetaCard({ receta, onVer, onEditar, onEliminar }) {
  return (
    <div className="receta-card">
      <img src={receta.imagen} alt={receta.titulo} className="receta-imagen" />
      <h3 className="receta-titulo">{receta.titulo}</h3>
      <p className="receta-texto">
        <strong>Ingredients:</strong> {receta.ingredientes}
      </p>
      <Boton className="card-btn" onClick={() => onVer(receta)}>Details</Boton>
      <Boton className="card-btn" onClick={() => onEditar(receta)}>Edit</Boton>
      <Boton className="card-btn" onClick={() => onEliminar(receta.id)}>Delete</Boton>
    </div>
  );
}

export default RecetaCard;