// src/vistas/VistaCarrusel.jsx
import Slider from "react-slick";
import RecetaCard from "../RecetaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VistaCarrusel({ recetas, onVer, onEditar, onEliminar }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }]
  };

  return (
    <Slider {...settings}>
      {recetas.map((receta) => (
        <div key={receta.id}>
          <RecetaCard
            receta={receta}
            onVer={onVer}
            onEditar={onEditar}
            onEliminar={onEliminar}
          />
        </div>
      ))}
    </Slider>
  );
}

export default VistaCarrusel;