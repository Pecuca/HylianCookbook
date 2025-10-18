import { useState } from "react";
import RecetaDetalle from "./RecetaDetalle";
import VistaLista from "./vistas/VistaLista";
import VistaGrid from "./vistas/VistaGrid";
import VistaCarrusel from "./vistas/VistaCarrusel";
import VistaTabla from "./vistas/VistaTabla";
import Boton from "./components/Boton";
import "./Recetas.css";

/*
  Recetas: Main page that hosts the recipe collection and allows switching
  between multiple presentation modes (list, grid, carousel, table).

  Responsibilities:
  - maintain local recipes state when not lifted
  - provide CRUD handlers to child views
  - coordinate popup show/hide and the recipe detail modal

  Props (optional lifted state):
  - vista, setVista: control which view is active
  - mostrarPopup, setMostrarPopup: control whether the add/edit popup is visible
*/
function Recetas({ vista: vistaProp, setVista: setVistaProp, mostrarPopup: mostrarPopupProp, setMostrarPopup: setMostrarPopupProp }) {
  const [recetas, setRecetas] = useState([
    {id: 1, titulo: "Deep-Fried Bird Roast", ingredientes: "Whole Bird, Hylian Salt", pasos: "Deep-fry whole bird, Season with salt.", comentarios: "A deep-fried whole bird of the highest grade.", imagen: "https://img.game8.co/3713774/edb659a7d91bb4bbe5ed9e08a79ff207.png/show"},
    {id: 2, titulo: "Copious Simmered Fruit", ingredientes: "Apples, Shock fruits, Ice Fruits, Spicy Peppers, Fire Fruits", pasos: "Put Fruits in a pot, add water, and simmer.", comentarios: "The flavours of the various fruits exist in perfect harmony", imagen: "https://img.game8.co/3709131/7ca0b987aa104496e6057cbaf9cc0602.png/show"},
    {id: 3, titulo: "Seared Gourmet Steak", ingredientes: "Gourmet Meat", pasos: "Put over an open flame like a campfire and rotate until done.", comentarios: "The highest quality gourmet meat, just kissed by an open flame. No additional seasoning have been added, which lets the natural flavor of the meat really shine.", imagen: "https://img.game8.co/3691878/481e41dbfd6cfd8f108a5879fff40da4.png/show"},
    {id: 4, titulo: "Egg Pudding", ingredientes: "Bird Egg, Fresh Milk, Cane Sugar", pasos: "Cook eggs and milk in a special mold.", comentarios: "Made by cooking eggs and milk in a special mold, its soft texture melts in your mouth.", imagen: "https://img.game8.co/3707519/1147fd81be4ee0fdc0e6ed5d559dd862.png/show"},
    {id: 5, titulo: "Cheesecake", ingredientes: "Hateno Cheese, Tabantha Wheat, Cane Sugar, Goat Butter", pasos: "Mix all ingredients and bake.", comentarios: "A rich, moist, flavorful dessert with a Hateno cheese base.", imagen: "https://img.game8.co/3714009/c9c476834ca04ec20b064a0b924c9726.png/show"},
    {id: 6, titulo: "Dark Cake", ingredientes: "Dark Clump, Cane Sugar, Goat Butter, Thabantha Wheat.", pasos: "Mix all ingredients and bake.", comentarios: "An unusual dark-clump cake with a unique flavor that may be impossible to fully describe.", imagen: "https://img.game8.co/3714003/1c078ac8418f4284c7b4b4379622f518.png/show"},
    {id: 7, titulo: "Fireproof Elixir", ingredientes: "Fireproof Lizard or Smothering Butterfly; Any Monster Part", pasos: "Add to a cooking pot with water and stir until ingredients mix.", comentarios: "Grants a fireproof effect, which prevents your body from catching fire. Be sure to pack this when venturing out to explore caves in Death Mountain.", imagen: "https://img.game8.co/3714972/fd831b0023c24b160c13f3212de1ca37.png/show"},
    {id: 8, titulo: "Bright Elixir", ingredientes: "Deep Firefly, Any Monster Part.", pasos: "Add to a cooking pot with water and stir until ingredients mix.", comentarios: "Grants a high-level glow effect, illuminating your immediate surroundings. This faint luminescence is a boon in dark places.", imagen: "https://img.game8.co/3692007/a7a80d7a7b06c979cd0312d79c8012f1.png/show"},
    {id: 9, titulo: "Chilly Elixir", ingredientes: "Cold Darner or Wintering Butterfly; Any Monster Part.", pasos: "Add to a cooking pot with water and stir until ingredients mix.", comentarios: "Grants a low-level cooling effect, raising your body's resistance to heat. Crucial for long journeys through the desert.", imagen: "https://img.game8.co/3714970/7d238fa8c2b0a0891cc86074161cadcd.png/show"},
  ]);

  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [pasos, setPasos] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [imagen, setImagen] = useState("");
  const [editId, setEditId] = useState(null);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);
  const [vistaLocal, setVistaLocal] = useState("lista");
  const [mostrarPopupLocal, setMostrarPopupLocal] = useState(false);

  const vista = vistaProp !== undefined ? vistaProp : vistaLocal;
  const setVista = setVistaProp !== undefined ? setVistaProp : setVistaLocal;
  const mostrarPopup = mostrarPopupProp !== undefined ? mostrarPopupProp : mostrarPopupLocal;
  const setMostrarPopup = setMostrarPopupProp !== undefined ? setMostrarPopupProp : setMostrarPopupLocal;

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
    setMostrarPopup(false);
  };

  const handleDelete = (id) => setRecetas(recetas.filter((r) => r.id !== id));

  const handleEdit = (receta) => {
    setTitulo(receta.titulo);
    setIngredientes(receta.ingredientes);
    setPasos(receta.pasos);
    setComentarios(receta.comentarios);
    setImagen(receta.imagen);
    setEditId(receta.id);
    setMostrarPopup(true);
  };

  const clearAndClose = () => {
    setTitulo("");
    setIngredientes("");
    setPasos("");
    setComentarios("");
    setImagen("");
    setEditId(null);
    setMostrarPopup(false);
  };

  return (
    <div className="recetas-layout">
      {/* Fixed bar showing current view */}
      <div className="visualizacion-bar">
        <div className="visualizacion-left" />
        <div className="visualizacion-center" />
        <div className="visualizacion-right" />
      </div>

      {/* Área de recetas que conecta con la barra superior e inferior */}
      <div className="recetas-box">
        <div className="recetas-lista">
          {vista === "lista" && (
            <VistaLista recetas={recetas} onVer={setRecetaSeleccionada} onEditar={handleEdit} onEliminar={handleDelete} />
          )}
          {vista === "grid" && (
            <VistaGrid recetas={recetas} onVer={setRecetaSeleccionada} onEditar={handleEdit} onEliminar={handleDelete} />
          )}
          {vista === "carrusel" && (
            <VistaCarrusel recetas={recetas} onVer={setRecetaSeleccionada} onEditar={handleEdit} onEliminar={handleDelete} />
          )}
          {vista === "tabla" && (
            <VistaTabla recetas={recetas} onVer={setRecetaSeleccionada} onEditar={handleEdit} onEliminar={handleDelete} />
          )}
        </div>
      </div>

      {/* Fixed footer */}
      <div className="footer-bar">
        <span>Alex Hernandez | Frameworks 2025C</span>
      </div>

      {/* Popup */}
      {mostrarPopup && (
        <div className="popup-overlay" onClick={clearAndClose}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>{editId ? "Edit Recipe" : "Add Recipe"}</h2>
            <form onSubmit={handleAddOrEdit}>

              <label htmlFor="titulo">Title</label>
              <input id="titulo" type="text" placeholder="Title" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />

              <label htmlFor="ingredientes">Ingredients</label>
              <textarea id="ingredientes" placeholder="Ingredients" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} required />

              <label htmlFor="pasos">Steps</label>
              <textarea id="pasos" placeholder="Steps" value={pasos} onChange={(e) => setPasos(e.target.value)} required />

              <label htmlFor="comentarios">Comments</label>
              <input id="comentarios" type="text" placeholder="Comments" value={comentarios} onChange={(e) => setComentarios(e.target.value)} />

              <label htmlFor="imagen">Image (URL)</label>
              <input id="imagen" type="text" placeholder="Image URL" value={imagen} onChange={(e) => setImagen(e.target.value)} required />

              <div className="form-actions">
                <button type="submit">{editId ? "Save Changes" : "Add Recipe"}</button>
                <button type="button" onClick={clearAndClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <RecetaDetalle receta={recetaSeleccionada} onClose={() => setRecetaSeleccionada(null)} />
    </div>
  );
}

export default Recetas;