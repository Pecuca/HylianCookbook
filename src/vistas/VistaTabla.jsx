// src/vistas/VistaTabla.jsx
function VistaTabla({ recetas, onVer, onEditar, onEliminar }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Ingredientes</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {recetas.map((receta) => (
          <tr key={receta.id}>
            <td>{receta.titulo}</td>
            <td>{receta.ingredientes}</td>
            <td>
              <button onClick={() => onVer(receta)}>Ver</button>
              <button onClick={() => onEditar(receta)}>Editar</button>
              <button onClick={() => onEliminar(receta.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid #ccc",
    padding: "8px",
    background: "#f2f2f2",
  },
  td: {
    border: "1px solid #ccc",
    padding: "8px",
  },
};

export default VistaTabla;