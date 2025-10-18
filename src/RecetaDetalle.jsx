import Boton from "./components/Boton";

function RecetaDetalle({ receta, onClose }) {
  if (!receta) return null;

  return (
    <div className="detail-overlay">
      <div className="detail-modal">
        <h2 className="detail-title">{receta.titulo}</h2>
        <img className="detail-image" src={receta.imagen} alt={receta.titulo} />
        <p><strong>Ingredients:</strong> {receta.ingredientes}</p>
        <p><strong>Steps:</strong> {receta.pasos}</p>
        <p><strong>Comments:</strong> {receta.comentarios}</p>
        <div className="detail-actions">
          <Boton onClick={onClose}>Close</Boton>
        </div>
      </div>
    </div>
  );
}

export default RecetaDetalle;