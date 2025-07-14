import { Link } from "react-router-dom";

export function Item({ id, nombre, descripcion, precio }) {
  return (
    <div className="item-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p><strong>Precio base: ${precio}</strong></p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
}