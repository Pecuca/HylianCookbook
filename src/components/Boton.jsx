import { useState } from "react";
import './Boton.css';

function Boton({ children, onClick, type = "button", activo = false }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);


  const classNames = `boton ${activo ? 'activo' : ''}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {children}
    </button>
  );
}

export default Boton;