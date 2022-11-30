import classes from "./Home.module.css";
import TourData from "./TourData";
const Home = () => {
  const tourInfo = [
    { date: "JUL 16", place: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL 19", place: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL 22", place: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL 29", place: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG 2", place: "LAS VEGAS, NV", venue: "T-MOBILE ARENAE" },
    { date: "AUG 7", place: "CONCORD, CA", venue: "CONCORD PAVILIONE" },
  ];
  /*const mealsList = productsArr.map((tour) => (
    <ProductItem
      key={Math.random().toString()}
      date={tour.date}
      place={tour.place}
      venue={tour.venue}
    />
  ));*/
  const tourInformation = tourInfo.map((tour) => (
    <TourData tour={tour} key={Math.random().toString()} />
  ));

  /* return (
    <section>
      <div className={classes.generics}>
        <div className={classes.generics}>
          <h1 className={classes.generics}>The Generics</h1>
        </div>
        <button>Get our latest Album</button>
      </div>
      <div>
        <h1>Tours</h1>
        <div className={classes.data}>
          <ul>{tourInformation}</ul>
        </div>
      </div>
    </section>
  );*/
  return (
    <section className={classes.section}>
      <div className={classes.div}>
        <h1>The Generics</h1>
        <button>Get Our Latest Album</button>
        <button className={classes["play-button"]}>&#9658;</button>
      </div>
      <h2>TOURS</h2>
      <div className={classes.tourInfo}>{tourInformation}</div>
    </section>
  );
};
export default Home;
