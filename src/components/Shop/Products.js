import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const dummy_arr = [
  {
    id: "p1",
    title: "Test1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Test2",
    price: 8,
    description: "This is a second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_arr.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
