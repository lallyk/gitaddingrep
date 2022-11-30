import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [Loading, setLoading] = useState(false);

  async function fetchMoviesHandler() {
    setLoading(true);
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.height,
        name: movieData.name,
        year: movieData.birth_year,
        eye: movieData.eye_color,
      };
    });
    setMovies(transformedMovies);
    setLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!Loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!Loading && movies.length === 0 && <p>Found no movies.</p>}
        {Loading && <p>Loading...</p>}
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
