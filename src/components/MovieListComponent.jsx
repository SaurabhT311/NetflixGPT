import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieListComponent = () => {
  const movies = useSelector((state) => state.movieSlice?.now_playing) || [];
  console.log("movies in MovieListComponent", movies);

  return (
    movies && (
      <div>
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Popular"} movies={movies} />
        <MovieList title={"Upcoming Movies"} movies={movies} />
        <MovieList title={"K-Dramas"} movies={movies} />
      </div>
    )
  );
};

export default MovieListComponent;
