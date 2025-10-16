// src/RecetaCard.jsx
function RecetaCard({ receta, onVer, onEditar, onEliminar }) {
  return (
    <div style={styles.card}>
      <img src={receta.imagen} alt={receta.titulo} style={styles.imagen} />
      <h3 style={styles.titulo}>{receta.titulo}</h3>
      <p style={styles.texto}>
        <strong>Ingredientes:</strong> {receta.ingredientes}
      </p>
      <button onClick={() => onVer(receta)}>Ver Detalle</button>
      <button onClick={() => onEditar(receta)}>Editar</button>
      <button onClick={() => onEliminar(receta.id)}>Eliminar</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    margin: "8px",
    width: "220px",
    background: "#fafafa",
    boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  imagen: {
    width: "100%",
    height: "150px",
    objectFit: "cover", // recorta la imagen sin deformarla
    borderRadius: "6px",
  },
  titulo: {
    fontSize: "1.1rem",
    margin: "8px 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis", // corta el texto largo con "..."
  },
  texto: {
    fontSize: "0.9rem",
    maxHeight: "40px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2, // máximo 2 líneas
    WebkitBoxOrient: "vertical",
  },
};

export default RecetaCard;