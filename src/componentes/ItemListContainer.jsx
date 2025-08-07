import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ItemList } from "./ItemList";

export function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef)
      .then((res) => {
        const productosFirebase = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosFirebase);
      })
      .catch((error) =>
        console.error("Error al cargar productos desde Firebase:", error)
      );
  }, []);

  return (
    <section>
      <h2>Catálogo de Productos</h2>
      <ItemList productos={productos} />
    </section>
  );
}