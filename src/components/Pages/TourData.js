import React from "react";

import classes from "./TourData.module.css";

const TourData = (props) => {
  return (
    <div className={classes.div}>
      <span className={classes.date}>{props.tour.date}</span>
      <span className={classes.place}>{props.tour.place}</span>
      <span className={classes.venue}>{props.tour.venue}</span>
      <button>BUY TICKETS</button>
    </div>
  );
};

export default TourData;
