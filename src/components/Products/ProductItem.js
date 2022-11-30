import { useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import classes from "./ProductItem.module.css";
import CartContext from "../../Store/CartContext";
const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price,
      quantity: quantity,
    });
  };
  return (
    <div className={classes.div}>
      <div className={classes.page}>
        <h2>{props.title}</h2>
        <div className={classes.image}>
          <img src={props.imageUrl} alt="Music Album" />
        </div>
        <div className={classes.detail}>
          <span className={classes.itembuttonprice}>${props.price}</span>
          <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
