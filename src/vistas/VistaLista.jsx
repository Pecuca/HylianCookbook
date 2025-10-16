import Boton from "../components/Boton";

function VistaLista({ recetas, onVer, onEditar, onEliminar }) {
  return (
    <ul>
      {recetas.map((receta) => (
        <li key={receta.id}>
          <h3>{receta.titulo}</h3>
          <Boton onClick={() => onVer(receta)}>Ver Detalle</Boton>
          <Boton onClick={() => onEditar(receta)}>Editar</Boton>
          <Boton onClick={() => onEliminar(receta.id)}>Eliminar</Boton>
        </li>
      ))}
    </ul>
  );
}

export default VistaLista;