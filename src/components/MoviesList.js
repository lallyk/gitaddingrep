import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.height}
          name={movie.name}
          year={movie.year}
          eye={movie.eye}
        />
      ))}
    </ul>
  );
};

export default MovieList;
