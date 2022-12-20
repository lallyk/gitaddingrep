import React, { useContext } from "react";
//import { useParams } from "react-router-dom";
import classes from "./ProductInformation.module.css";
import ProductContext from "../../Store/productContext";
import Image1 from "../../ProImg/image1.png";

const ProductInformation = (props) => {
  const productCtx = useContext(ProductContext);

  return (
    <div className={classes.product}>
      <img src={Image1} alt={productCtx.title} />
      <div className={classes.detail}>
        <h3>{productCtx.title}</h3>
        <h2>${productCtx.price.toFixed(2)}</h2>
        <span className={classes.rating}>
          Rating <span>{productCtx.rating}&#9733;</span>
        </span>
        <p>{productCtx.detail}</p>
      </div>
    </div>
  );
};

export default ProductInformation;
