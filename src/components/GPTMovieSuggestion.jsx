import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { searchedMovie, movieResults } = useSelector(
    (state) => state.gptSlice,
  );

  if (!searchedMovie || !movieResults) {
    return null; // or a loading indicator
  }

  return (
    <div className="p-4 my-4 bg-black text-white">
      <h2 className="text-xl font-bold mb-2">GPT Movie Suggestions</h2>
      <p className="mb-2">You searched for: {searchedMovie.join(", ")}</p>
      <div>
        {searchedMovie.map((movie, index) => (
          <MovieList key={index} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
