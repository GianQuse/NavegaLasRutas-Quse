import cartIcon from '/imagenes/carrito-de-compras.png';

function FloatingCart({ itemCount = 0, onClick }) {
  return (
    <div className="floating-cart" onClick={onClick}>
      {itemCount > 0 && <div className="cart-badge">{itemCount}</div>}
      <img src={cartIcon} alt="Carrito de compras" className="cart-icon" />
    </div>
  );
}

export default FloatingCart;

