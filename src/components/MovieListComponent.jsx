import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieListComponent = () => {
  const movies = useSelector((state) => state.movieSlice) || [];

  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-46 pl-11 relative z-10">
        <MovieList title={"Now Playing"} movies={movies?.now_playing} />
        <MovieList title={"Top Rated"} movies={movies?.top_rated_movies} />
        <MovieList title={"Popular"} movies={movies?.popular_movies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcoming_movies} />
        <MovieList title={"Recommended Series"} movies={movies?.top_rated_series} />
        </div>
      </div>
    )
  );
};

export default MovieListComponent;
