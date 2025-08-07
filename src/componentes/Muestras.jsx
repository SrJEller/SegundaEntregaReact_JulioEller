import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ItemCount } from "./ItemCount";
import { useCart } from "./CartContext";

export function Muestras() {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useCart(); // ✅ Se usa el contexto

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
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  const handleAddToCart = (producto, cantidad) => {
    const total = producto.precio * cantidad;
    const item = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad,
      total,
    };
    agregarAlCarrito(item); // ✅ Se invoca del contexto
  };

  return (
    <section className="contenedor-presupuesto">
      <h2 className="titulo-simulador">Seleccioná tus muestras</h2>
      {productos.map((producto) => (
        <div key={producto.id} className="muestra-card">
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p><strong>Precio unitario:</strong> ${producto.precio}</p>
          <ItemCount
            stock={producto.stock || 10}
            onAdd={(cantidad) => handleAddToCart(producto, cantidad)}
          />
        </div>
      ))}
    </section>
  );
}