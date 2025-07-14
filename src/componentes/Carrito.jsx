export function Carrito({ items }) {
  console.log("Items en el carrito:", items); // <- Agregá esto temporalmente

  if (!items || items.length === 0) {
    return <section><h3>No hay muestras en el carrito.</h3></section>;
  }

  return (
    <section className="carrito-detalle">
      <h2>Carrito de Muestras</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p><strong>Matriz:</strong> {item.matriz}</p>
            <p><strong>Cantidad:</strong> {item.cantidad}</p>
            <p><strong>Analitos:</strong> {item.analitos.join(", ")}</p>
            <p><strong>Total:</strong> ${item.total}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}