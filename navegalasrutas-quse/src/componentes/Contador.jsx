import { useState } from 'react';
import { useContext } from 'react';
import { cartContext } from './Cart/CartContext';
import cartIcon from '/imagenes/carrito-de-compras.png';

function Counter({product}) {
  const {onAdd} = useContext(cartContext);

  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    alert(`Agregaste ${count} producto(s) al carrito 🛒`);
    onAdd(product, count);
  };

  return (
    <div className="counter-wrapper">
      <div className="counter-container">
        <button onClick={decrease} className="counter-button decrement">-</button>
        <span className="counter-value">{count}</span>
        <button onClick={increase} className="counter-button increment">+</button>
      </div>

      <button className="add-to-cart-modern" onClick={handleAddToCart}>
        Agregar al carrito <img src={cartIcon} alt="Carrito de compras" className="cart-icon-button" />
      </button>
    </div>
  );
}

export default Counter;

