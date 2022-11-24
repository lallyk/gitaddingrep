const ProductItem = (props) => {
  return (
    <li>
      <div>
        <h3>{props.title}</h3>
        <div>{props.price}</div>
        <div>{props.imageurl}</div>
      </div>
    </li>
  );
};

export default MealItem;
