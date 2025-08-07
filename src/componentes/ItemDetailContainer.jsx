import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ItemDetail } from "./ItemDetail";

export function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoRef = doc(db, "productos", id);

    getDoc(productoRef)
      .then((res) => {
        if (res.exists()) {
          setProducto({ id: res.id, ...res.data() });
        } else {
          console.warn("Producto no encontrado en Firebase");
        }
      })
      .catch((error) =>
        console.error("Error al cargar producto desde Firebase:", error)
      );
  }, [id]);

  return producto ? <ItemDetail {...producto} /> : <p>Cargando producto...</p>;
}