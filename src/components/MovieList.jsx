import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies", movies);
  

  return (
    <div className="px-8 bg-[#000000]">
      <h1 className="text-4xl py-4 font-medium text-white">{title}</h1>
      <div className="flex overflow-x-auto pt-4 scrollbar-hidden"> 
        <div className="flex gap-8">
          {movies &&
            movies?.length > 0 &&
            movies?.map((movie) => (
              <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
