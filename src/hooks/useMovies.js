import { API_OPTIONS } from "../utils/constants";

const useMovies = () => {
  const getNowPlayingMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      console.log("json", data?.results);
      return data?.results;
    } catch (error) {
      return error;
    }
  };

  const getMovieBackgroundTrailer = async (movieId) => {
    try {
      console.log("id", movieId);
      
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await response.json();
      console.log("json", data?.results);
      return data;
    } catch (error) {
      return error;
    }
  }

  return { getNowPlayingMovie, getMovieBackgroundTrailer };
};

export default useMovies;