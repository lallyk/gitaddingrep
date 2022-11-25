import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", items: "Album 2", price: 14.99, quantity: 2 }].map(
        (item) => (
          <div>
            <li>{item.items}</li>
            <li>{item.price}</li>
            <li>{item.quantity}</li>
          </div>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      <div className={classes.h1}>
        <h1>Cart</h1>
      </div>
      <div className={classes.total}>
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
      </div>
      {cartItems}
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>X</button>
        <button className={classes.button}>Purchase</button>
      </div>
    </Modal>
  );
};

export default Cart;
