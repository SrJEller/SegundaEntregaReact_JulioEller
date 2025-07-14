export function ItemDetail({ nombre, descripcion, precio }) {
  return (
    <div className="item-detail">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p><strong>Precio:</strong> ${precio}</p>
    </div>
  );
}