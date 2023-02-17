import classes from "./ProductInformation.module.css";
import { useLocation } from "react-router-dom";

const ProductInformation = (props) => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div className={classes.product}>
      <img src={data.imageUrl} alt={data.title} />
      <div className={classes.detail}>
        <h3>{data.title}</h3>
        <h2>${data.price.toFixed(2)}</h2>
        <span className={classes.rating}>
          Rating <span>4.5{data.rating}&#9733;</span>
        </span>
        <p>{data.detail}</p>
      </div>
    </div>
  );
};

export default ProductInformation;
