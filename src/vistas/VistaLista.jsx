// src/vistas/VistaLista.jsx
function VistaLista({ recetas, onVer, onEditar, onEliminar }) {
  return (
    <ul>
      {recetas.map((receta) => (
        <li key={receta.id}>
          <h3>{receta.titulo}</h3>
          <button onClick={() => onVer(receta)}>Ver Detalle</button>
          <button onClick={() => onEditar(receta)}>Editar</button>
          <button onClick={() => onEliminar(receta.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default VistaLista;