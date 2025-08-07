import { useState } from "react";

export function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => onAdd(count)}>Agregar</button>
    </div>
  );
}