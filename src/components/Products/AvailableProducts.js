//import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem";
//import image1 from "../assets/image1.png";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "assets/image2.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "assets/image1.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const AvailableProducts = () => {
  const mealsList = productsArr.map((meal) => (
    <ProductItem
      key={meal.id}
      id={meal.id}
      title={meal.title}
      price={meal.price}
      imageurl={meal.imageurl}
    />
  ));

  return (
    <section>
      <div>
        <ul>{mealsList}</ul>
      </div>
    </section>
  );
};

export default AvailableProducts;
