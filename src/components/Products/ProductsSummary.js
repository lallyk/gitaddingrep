import classes from "./ProductsSummary.module.css";

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>MUSIC</h2>
      <div class={classes.page}>
        <h3>Album 1</h3>
        <div className={classes.imagecontainer}>
          <img className={classes.prodimage} src="./assets/image1.png" alt="" />
        </div>
        <div className={classes.proddetails}>
          <span>$12.99</span>
          <button className={classes.itembutton} type="button">
            ADD TO CART
          </button>
        </div>
        <h3>Album 2</h3>
        <div className={classes.imagecontainer}>
          <img className={classes.prodimage} src="./assets/image2.png" alt="" />
        </div>
        <div className={classes.proddetails}>
          <span>$14.99</span>
          <button className={classes.itembutton} type="button">
            ADD TO CART
          </button>
        </div>
      </div>
      <div>
        <h3>Album 3</h3>
        <div className={classes.imagecontainer}>
          <img className={classes.prodimage} src="./assets/image3.png" alt="" />
        </div>
        <div className={classes.proddetails}>
          <span>$9.99</span>
          <button className={classes.itembutton} type="button">
            ADD TO CART
          </button>
        </div>
      </div>
      <h3>Album 4</h3>
      <div className={classes.imagecontainer}>
        <img className={classes.prodimage} src="./assets/image4.png" alt="" />
      </div>
      <div className={classes.proddetails}>
        <span>$19.99</span>
        <button className={classes.itembutton} type="button">
          ADD TO CART
        </button>
      </div>
    </section>
  );
};

export default ProductsSummary;
