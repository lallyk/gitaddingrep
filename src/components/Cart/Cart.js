import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../Store/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
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
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const purchaseHandler = () => {
    cartCtx.purchased();
  };
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
        <button className={classes.button} onClick={purchaseHandler}>
          Purchase
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
