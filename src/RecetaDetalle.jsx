// src/RecetaDetalle.jsx
function RecetaDetalle({ receta, onClose }) {
  if (!receta) return null; // si no hay receta seleccionada, no muestra nada

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>{receta.titulo}</h2>
        <img src={receta.imagen} alt={receta.titulo} style={styles.imagen} />
        <p><strong>Ingredientes:</strong> {receta.ingredientes}</p>
        <p><strong>Pasos:</strong> {receta.pasos}</p>
        <p><strong>Comentarios:</strong> {receta.comentarios}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 1000
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
    width: "90%",
    maxHeight: "80vh",
    overflowY: "auto"
  },
  imagen: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "12px"
  }
};

export default RecetaDetalle;