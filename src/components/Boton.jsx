import { useState } from "react";
import './Boton.css';

// Boton: small wrapper around a native <button> that provides consistent
// styling and simple interactive state (hover/active). The component is
// intentionally minimal and passes unknown props to the underlying element.
// Props:
// - children: node to render inside the button
// - onClick: click handler
// - type: button type (button|submit|reset)
// - activo: boolean to reflect an "active" visual state
// - className: additional class names
// Additional props are forwarded to the native <button>.
function Boton({ children, onClick, type = "button", activo = false, className = "", ...rest }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Compose class names: base class plus optional 'activo' state
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