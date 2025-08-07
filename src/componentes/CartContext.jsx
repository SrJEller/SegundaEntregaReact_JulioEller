import { createContext, useContext, useState, useEffect } from "react";

// 1. Crear el contexto
const CartContext = createContext();

// 2. Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// 3. Componente proveedor del contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  // Actualiza el total de ítems cada vez que cambia el carrito
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.cantidad, 0);
    setTotalItems(total);
  }, [cart]);

  const agregarAlCarrito = (item) => {
    const index = cart.findIndex((p) => p.id === item.id);
    if (index !== -1) {
      const nuevoCarrito = [...cart];
      nuevoCarrito[index].cantidad += item.cantidad;
      nuevoCarrito[index].total += item.total;
      setCart(nuevoCarrito);
    } else {
      setCart((prev) => [...prev, item]);
    }
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito: cart, // 🔄 alias para usar en todos lados como "carrito"
        agregarAlCarrito,
        vaciarCarrito,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}