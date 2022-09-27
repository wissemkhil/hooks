import React from "react";
import MovieCard from "./MovieCard";
const MovieList = (props) => {
  console.log(props.movies);
  return (
    <div>
      {props.movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
