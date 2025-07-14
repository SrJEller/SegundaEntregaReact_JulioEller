import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import "./Styles.css";

export function NavBar({ totalItems }) {
  return (
    <nav>
      <div className="nav-content">
        <h1 className="logo">Laboratorio Ambiental</h1>
        <ul className="nav-links">
          <li><Link to="/inicio">Inicio</Link></li>
          <li><Link to="/muestras">Muestras</Link></li>
          <li><Link to="/catalogo">Catálogo</Link></li>
          <li>
            <a
              href="https://www.linkedin.com/in/ellerjulio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </li>
        </ul>
        <CartWidget totalItems={totalItems} />
      </div>
    </nav>
  );
}