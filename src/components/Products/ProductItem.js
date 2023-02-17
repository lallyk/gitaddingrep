import { useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import classes from "./ProductItem.module.css";
import CartContext from "../../Store/CartContext";
import ProductContext from "../../Store/productContext";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);

  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price,
      quantity: quantity,
    });
  };
  const productInformation = {
    title: props.title,
    imageUrl: props.imageUrl,
    price: props.price,
    rating: 4.5,
    detail: "Best album of the year",
  };
  const productDetailHandler = () => {
    productCtx.changeDetail(productInformation);
  };
  return (
    <div className={classes.div}>
      <h2>{props.title}</h2>
      <div className={classes.image}>
        <Link to={{ pathname: "products/productDetail", state: props }}>
          <img
            src={props.imageUrl}
            alt="Music Album"
            onClick={productDetailHandler}
          />
        </Link>
      </div>
      <div className={classes.detail}>
        <span className={classes.itembuttonprice}>${props.price}</span>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default ProductItem;
