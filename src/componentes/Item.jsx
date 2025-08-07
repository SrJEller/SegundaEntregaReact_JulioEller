import { Link } from "react-router-dom";

export function Item({ id, nombre, descripcion, precio, imagen }) {
  return (
    <div className="item-card">
      <img 
        src={imagen} 
        alt={nombre} 
        style={{ width: "100%", height: "auto", objectFit: "cover" }} 
      />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p><strong>Precio base: ${precio}</strong></p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
}