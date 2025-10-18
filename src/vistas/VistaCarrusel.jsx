import { useRef } from "react";
import Slider from "react-slick";
import RecetaCard from "../RecetaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VistaCarrusel({ recetas, onVer, onEditar, onEliminar }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="carrusel-wrap">
      <div className="carrusel-slider">
        <Slider ref={sliderRef} {...settings}>
          {recetas.map((receta) => (
            <div key={receta.id} className="slick-slide-inner">
              <RecetaCard
                receta={receta}
                onVer={onVer}
                onEditar={onEditar}
                onEliminar={onEliminar}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="carousel-controls">
        <button className="carousel-btn carousel-prev" aria-label="Anterior" onClick={() => sliderRef.current && sliderRef.current.slickPrev()}>◄</button>
        <button className="carousel-btn carousel-next" aria-label="Siguiente" onClick={() => sliderRef.current && sliderRef.current.slickNext()}>►</button>
      </div>
    </div>
  );
}

export default VistaCarrusel;