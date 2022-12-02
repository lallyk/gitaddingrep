import { useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import classes from "./ProductItem.module.css";
import CartContext from "../../Store/CartContext";
import ProductContext from "../../Store/ProductContext";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  let userEmail;
  if (localStorage.getItem("tokenId")) {
    userEmail = JSON.parse(localStorage.getItem("tokenId")).email;
    userEmail = userEmail.replace(/[@.]/g, "");
  }
  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);

  const product = {
    title: props.title,
    imageUrl: props.imageUrl,
    price: props.price,
    quantity: 1,
  };

  const addingItemToCartHandler = async () => {
    let updatedItem = [...cartCtx.item];
    let updatedAmount = cartCtx.totalAmount;
    updatedAmount = updatedAmount + product.price * product.quantity;

    const cartItemIndex = cartCtx.item.findIndex(
      (item) => item.title === product.title
    );

    if (cartItemIndex === -1) {
      try {
        const res = await fetch(
          `https://crudcrud.com/api/f0d677283303453eaf46506e76d447a0/cartItem${userEmail}`,
          {
            method: "POST",
            body: JSON.stringify({
              title: product.title,
              price: product.price,
              imageUrl: product.imageUrl,
              quantity: product.quantity,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        updatedItem = [...updatedItem, data];
        cartCtx.addItem({ item: updatedItem, totalAmount: updatedAmount });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      const newQuantity = (updatedItem[cartItemIndex].quantity += 1);
      try {
        await fetch(
          `https://crudcrud.com/api/f0d677283303453eaf46506e76d447a0/cartItem${userEmail}/${updatedItem[cartItemIndex]._id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              title: product.title,
              price: product.price,
              imageUrl: product.imageUrl,
              quantity: newQuantity,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        updatedItem[cartItemIndex].quantity = newQuantity;

        cartCtx.addItem({ item: updatedItem, totalAmount: updatedAmount });
      } catch (err) {
        console.log(err.message);
      }
    }
  };

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
      <div className={classes.page}>
        <h2>{props.title}</h2>
        <div className={classes.image}>
          <Link to={`/product/${props.title}`}>
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
    </div>
  );
};

export default ProductItem;
