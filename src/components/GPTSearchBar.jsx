import React, { useRef, useEffect, useRef as useReactRef } from "react";
import language from "../utils/langConstant";
import { useDispatch, useSelector } from "react-redux";
import geminiApi from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const lang = useSelector((state) => state.languageSlice.currentLanguage);

  const searchTextRef = useRef(null);
  const dispatch = useDispatch();

  // Persist chat instance
  const chatRef = useReactRef(null);

  useEffect(() => {
    chatRef.current = geminiApi.chats.create({
      model: "gemini-3.5-flash",
    });
  }, []);

  //Search movie in TMDB
  const searchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results; // Return the first search result
  };

  const handleGptSearch = async (e) => {
    e.preventDefault();

    try {
      const searchKeyword = searchTextRef.current.value;

      const prompt = `
        You are a movie recommendation system.

        Suggest exactly 5 movies for:
        "${searchKeyword}"

        Rules:
        - Only movie names
        - Comma separated
        - No numbering
        - No explanation
      `;

      const geminiResult = await chatRef.current.sendMessage({
        message: prompt,
      });
      if (!geminiResult?.text) {
        //TODO: Error handling
      }
      const geminiMovies = geminiResult.text.split(",");

      //For each movie TMDB api will be called
      const movieData = geminiMovies.map((movie) => searchMovie(movie));
      const tmdbMovies = await Promise.all(movieData);
      dispatch(addGeminiMovieResult({searchedMovie: geminiMovies, movieResults: tmdbMovies}));
      
    } catch (error) {
      console.error("GPT ERROR:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form
        className="w-1/2 bg-black grid grid-cols-8"
        onSubmit={handleGptSearch}
      >
        <input
          ref={searchTextRef}
          type="text"
          className="p-4 m-4 bg-white col-span-6"
          placeholder={language[lang]?.gptSearchPlaceholder}
        />

        <button
          type="submit"
          className="col-span-2 py-2 px-4 m-4 bg-[rgb(229,9,20)] text-white rounded-lg cursor-pointer"
        >
          {language[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
