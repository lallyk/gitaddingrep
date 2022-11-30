import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <h3>{props.year}</h3>
      <p>{props.eye}</p>
    </li>
  );
};

export default Movie;
