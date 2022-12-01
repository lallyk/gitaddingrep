import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../Store/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      <button className={classes.buttonclose} onClick={props.onClose}>
        X
      </button>
      <div className={classes.h1}>
        <h1>Cart</h1>
      </div>
      <div className={classes.total}>
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
      </div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button}>Purchase</button>
      </div>
    </Modal>
  );
};

export default Cart;
