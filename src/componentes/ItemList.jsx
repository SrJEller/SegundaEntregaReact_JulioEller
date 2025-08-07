import { Item } from "./Item";

export function ItemList({ productos = [] }) {
  if (!productos.length) return <p>Cargando productos...</p>;

  return (
    <div className="item-list">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}