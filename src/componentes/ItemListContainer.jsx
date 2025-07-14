import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data/productos";
import { ItemList } from "./ItemList";

export function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams(); // categoría

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        if (id) {
          resolve(productos.filter(prod => prod.categoria === id));
        } else {
          resolve(productos);
        }
      }, 500);
    });

    fetchData.then((res) => setItems(res));
  }, [id]);

  return (
    <section>
      <h2>Catálogo de Productos</h2>
      <ItemList items={items} />
    </section>
  );
}