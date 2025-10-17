import { useState } from "react";
import './Boton.css';

function Boton({ children, onClick, type = "button", activo = false, className = "", ...rest }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const classNames = `boton ${activo ? 'activo' : ''} ${className}`.trim();

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
      {...rest}
    >
      {children}
    </button>
  );
}

export default Boton;