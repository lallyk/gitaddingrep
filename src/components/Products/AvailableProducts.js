import ProductItem from "./ProductItem";
import classes from "./AvailableProducts.module.css";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "./assets/image1.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "./assets/image2.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "./assets/image3.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "./assets/image4.png",
  },
];

const AvailableProducts = (props) => {
  const mealsList = productsArr.map((meal) => (
    <ProductItem
      key={meal.id}
      title={meal.title}
      imageUrl={meal.imageUrl}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <div className={classes.div}>
        <ul>{mealsList}</ul>
      </div>
    </section>
  );
};

export default AvailableProducts;
