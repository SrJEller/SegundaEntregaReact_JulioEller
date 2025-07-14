import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productos } from "../data/productos";
import { ItemDetail } from "./ItemDetail";

export function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((prod) => prod.id === id));
      }, 500);
    });

    fetchItem.then((res) => setProducto(res));
  }, [id]);

  return producto ? <ItemDetail {...producto} /> : <p>Cargando producto...</p>;
}