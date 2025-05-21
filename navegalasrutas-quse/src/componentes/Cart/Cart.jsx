import { useContext } from "react";
import { cartContext } from "./CartContext";
import styles from './Cart.module.css';

export const Cart = () => {
    const { cart, clearCart, removeItem, totalPrice,formatAsPesoArgentino } = useContext(cartContext);

    if (cart.length === 0) {
        return <div className={styles.emptyCart}>
            <h3>Ups...!!</h3>
            <p>Tu carrito está vacío<br />😢</p>
        </div>;
    }

    return (
        <div className={styles.cartContainer}>
            {cart.map((cartItem, index) => (
                <div key={index} className={styles.cartItem}>
                    <img
                        src={cartItem.product.imagen}
                        alt={cartItem.product.nombre}
                        className={styles.cartItemImg}
                    />
                    <div className={styles.cartItemInfo}>
                        <h3 className={styles.cartItemNombre}>{cartItem.product.nombre}</h3>
                        <p className={styles.cartItemPrecio}>{formatAsPesoArgentino(cartItem.product.precio * cartItem.quantity)}</p>
                        <p className={styles.cartItemCantidad}>Cantidad: {cartItem.quantity}</p>
                        <button onClick={() => { removeItem(cartItem.product.nombre, cartItem.product.descripcion) }}>Quitar Carrito</button>
                    </div>
                </div>
            ))}
            <h3>PRECIO TOTAL: {formatAsPesoArgentino(totalPrice())}</h3>
            <button onClick={clearCart} className={styles.clearCartButton}>Vaciar Carrito</button>
        </div>
    );
};
