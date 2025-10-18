# Hylian Cookbook (RecipeBookbook)

This is a small React + Vite project used for the Frameworks course (2025C).
It showcases a simple recipe manager with multiple presentation modes (list,
grid, carousel, table), a small auth flow, and CRUD operations stored in
component state (no backend).

Main files
- `src/Recetas.jsx`: main page containing recipes and view switching
- `src/components/RecetaCard.jsx`: card used in grid and carousel views
- `src/RecetaDetalle.jsx`: recipe detail modal
- `src/components/Sidebar.jsx`: left-side navigation and controls
- `src/components/Boton.jsx`: shared button component
- `src/vistas/*`: different presentation views (List, Grid, Carousel, Table)

How to run
1. Install dependencies:

```powershell
npm install
```

2. Start dev server (Vite):

```powershell
npm run dev
```

3. Open the URL printed by Vite (usually http://localhost:5173).

Notes for maintainers
- The project uses plain CSS files per-component located under `src/components`.
- UI copy has been standardized to English across views.
- The auth module is a demo: it stores credentials in `localStorage` and is
  not secure. Replace with a real auth backend for production.

Customization tips
- To change the appearance of recipe cards, edit `src/components/RecetaCard.css`.
- To adjust the carousel behavior, check `src/vistas/VistaCarrusel.jsx` (it uses react-slick).

Contributing
- Open a PR against `main` with a clear description of UI/behavior changes.

License
- This repository is for instructional/demo purposes.
