import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; 

export function CartWidget() {
  const { totalItems } = useCart(); 

  return (
    <div className="cart-widget">
      <Link to="/carrito" className="cart-link">
        <FaShoppingCart />
        <span className="cart-count">{totalItems}</span>
      </Link>
    </div>
  );
}