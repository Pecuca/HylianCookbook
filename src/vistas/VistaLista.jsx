import Boton from "../components/Boton";

// VistaLista: renders recipes as a vertical list. Each item shows the title
// and action buttons. This component is intentionally simple and relies on
// callback props to inform the parent component about user interaction.
// Props:
// - recetas: array of recipe objects { id, titulo, ingredientes, ... }
// - onVer(receta): callback to view details for a recipe
// - onEditar(receta): callback to start editing a recipe
// - onEliminar(id): callback to delete a recipe by id
function VistaLista({ recetas, onVer, onEditar, onEliminar }) {
  return (
    <ul className="lista-vistas">
      {recetas.map((receta) => (
        <li className="list-item-box" key={receta.id}>
          {/* Recipe title */}
          <h3>{receta.titulo}</h3>

          {/* Action buttons: labels in English for consistency */}
          <div className="list-item-actions">
            <Boton onClick={() => onVer(receta)}>View Details</Boton>
            <Boton onClick={() => onEditar(receta)}>Edit</Boton>
            <Boton onClick={() => onEliminar(receta.id)}>Delete</Boton>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default VistaLista;