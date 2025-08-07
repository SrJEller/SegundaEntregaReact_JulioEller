import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

export function Carrito() {
  const { carrito, vaciarCarrito } = useCart();

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.total, 0);
  };

  if (carrito.length === 0) {
    return (
      <section className="contenedor-presupuesto">
        <h2>Carrito de compras</h2>
        <p>No hay muestras en el carrito.</p>
      </section>
    );
  }

  return (
    <section className="contenedor-presupuesto">
      <h2>Carrito de Muestras</h2>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>
            <p><strong>Matriz:</strong> {item.nombre}</p>
            <p><strong>Cantidad:</strong> {item.cantidad}</p>
            <p><strong>Precio unitario:</strong> ${item.precio}</p>
            <p><strong>Total:</strong> ${item.total}</p>
            <hr />
          </li>
        ))}
      </ul>
      <p><strong>Total general:</strong> ${calcularTotal()}</p>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </section>
  );
}