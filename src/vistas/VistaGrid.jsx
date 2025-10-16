import RecetaCard from "../RecetaCard";

function VistaGrid({ recetas, onVer, onEditar, onEliminar }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {recetas.map((receta) => (
        <RecetaCard
          key={receta.id}
          receta={receta}
          onVer={onVer}
          onEditar={onEditar}
          onEliminar={onEliminar}
        />
      ))}
    </div>
  );
}

export default VistaGrid;