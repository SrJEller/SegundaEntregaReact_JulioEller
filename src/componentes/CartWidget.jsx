import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartWidget.css";

export function CartWidget({ totalItems }) {
  return (
    <div className="cart-widget">
      <Link to="/carrito" className="cart-link">
        <FaShoppingCart size={24} />
        <span className="item-count">{totalItems}</span>
      </Link>
    </div>
  );
}