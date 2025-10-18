import Boton from "../components/Boton";

// VistaTabla: renders recipes in a table layout. Each row contains title,
// ingredients and action buttons. Buttons are labelled in English to keep
// the UI consistent.
// Props:
// - recetas: array of recipe objects
// - onVer(receta): show details
// - onEditar(receta): edit recipe
// - onEliminar(id): delete recipe
function VistaTabla({ recetas, onVer, onEditar, onEliminar }) {
  return (
    <div className="table-box">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Ingredients</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta) => (
            <tr key={receta.id}>
              <td>{receta.titulo}</td>
              <td>{receta.ingredientes}</td>
              <td className="table-actions">
                <Boton onClick={() => onVer(receta)}>View</Boton>
                <Boton onClick={() => onEditar(receta)}>Edit</Boton>
                <Boton onClick={() => onEliminar(receta.id)}>Delete</Boton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Inline style object kept for reference, but CSS files provide visual rules.
const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    padding: "8px",
    background: "#f2f2f2",
  },
  td: {
    padding: "8px",
  },
};

export default VistaTabla;