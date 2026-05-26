import { API_OPTIONS } from "../utils/constants";

const useMovies = () => {
  const getNowPlayingMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        API_OPTIONS,
      );
      const data = await response.json();
      return data?.results;
    } catch (error) {
      return error;
    }
  };

  const getMovieBackgroundTrailer = async (movieId) => {
    try {

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  const myPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?&page=1",
        API_OPTIONS,
      );
      const data = await response.json();
      return data?.results;
    } catch (error) {
      return error;
    }
  };

  const topRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?&page=1",
        API_OPTIONS,
      );
      const data = await response.json();
      return data?.results;
    } catch (error) {
      return error;
    }
  };

  const upcomingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?&page=1",
        API_OPTIONS,
      );
      const data = await response.json();
      return data?.results;
    } catch (error) {
      return error;
    }
  };

  const topRatedSeriesList = async (series_id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated`,
        API_OPTIONS,
      );
      const data = await response.json();
      return data?.results;
    } catch (error) {
      return error;
    }
  };

  return {
    getNowPlayingMovie,
    getMovieBackgroundTrailer,
    myPopularMovies,
    topRatedMovies,
    upcomingMovies,
    topRatedSeriesList,
  };
};

export default useMovies;