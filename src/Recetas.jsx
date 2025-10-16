import { useState } from "react";
import RecetaDetalle from "./RecetaDetalle";
import VistaLista from "./vistas/VistaLista";
import VistaGrid from "./vistas/VistaGrid";
import VistaCarrusel from "./vistas/VistaCarrusel";
import VistaTabla from "./vistas/VistaTabla";

function Recetas() {
  const [recetas, setRecetas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [pasos, setPasos] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [imagen, setImagen] = useState(""); // nuevo campo
  const [editId, setEditId] = useState(null);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);
  const [vista, setVista] = useState("lista");

  const handleAddOrEdit = (e) => {
    e.preventDefault();
    if (editId) {
      setRecetas(
        recetas.map((r) =>
          r.id === editId
            ? { ...r, titulo, ingredientes, pasos, comentarios, imagen }
            : r
        )
      );
      setEditId(null);
    } else {
      const nuevaReceta = {
        id: Date.now(),
        titulo,
        ingredientes,
        pasos,
        comentarios,
        imagen,
      };
      setRecetas([...recetas, nuevaReceta]);
    }
    setTitulo("");
    setIngredientes("");
    setPasos("");
    setComentarios("");
    setImagen("");
  };

  const handleDelete = (id) => setRecetas(recetas.filter((r) => r.id !== id));
  const handleEdit = (receta) => {
    setTitulo(receta.titulo);
    setIngredientes(receta.ingredientes);
    setPasos(receta.pasos);
    setComentarios(receta.comentarios);
    setImagen(receta.imagen);
    setEditId(receta.id);
  };

  return (
    <div>
      <h2>📋 Mis Recetas</h2>

      {/* Selector de vista */}
      <div>
        <button onClick={() => setVista("lista")}>Vista Lista</button>
        <button onClick={() => setVista("grid")}>Vista Grid</button>
        <button onClick={() => setVista("carrusel")}>Vista Carrusel</button>
        <button onClick={() => setVista("tabla")}>Vista Tabla</button>
      </div>

      {/* Formulario */}
      <form onSubmit={handleAddOrEdit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredientes"
          value={ingredientes}
          onChange={(e) => setIngredientes(e.target.value)}
          required
        />
        <textarea
          placeholder="Pasos"
          value={pasos}
          onChange={(e) => setPasos(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Comentarios"
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
        />
        <button type="submit">
          {editId ? "Guardar Cambios" : "Agregar Receta"}
        </button>
      </form>

      {/* Vista dinámica */}
      {vista === "lista" && (
        <VistaLista
          recetas={recetas}
          onVer={setRecetaSeleccionada}
          onEditar={handleEdit}
          onEliminar={handleDelete}
        />
      )}
      {vista === "grid" && (
        <VistaGrid
          recetas={recetas}
          onVer={setRecetaSeleccionada}
          onEditar={handleEdit}
          onEliminar={handleDelete}
        />
      )}
      {vista === "carrusel" && (
        <VistaCarrusel
          recetas={recetas}
          onVer={setRecetaSeleccionada}
          onEditar={handleEdit}
          onEliminar={handleDelete}
        />
      )}
      {vista === "tabla" && (
        <VistaTabla
          recetas={recetas}
          onVer={setRecetaSeleccionada}
          onEditar={handleEdit}
          onEliminar={handleDelete}
        />
      )}

      {/* Modal de detalle */}
      <RecetaDetalle
        receta={recetaSeleccionada}
        onClose={() => setRecetaSeleccionada(null)}
      />
    </div>
  );
}

export default Recetas;