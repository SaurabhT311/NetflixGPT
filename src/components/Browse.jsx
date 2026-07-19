import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import GPTSearch from "./GPTSearch";
import VideoContainer from "./VideoComponent";
import useMovies from "../hooks/useMovies";

import {
  setNowPlaying,
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setTopRatedSeries,
} from "../utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const {
    getNowPlayingMovie,
    getMyPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getTopRatedSeries,
  } = useMovies();

  const showGptSearch = useSelector(
    (state) => state.gptSlice.showGptSearchView,
  );

  const {
    now_playing,
    popular_movies,
    top_rated_movies,
    upcoming_movies,
    top_rated_series,
  } = useSelector((state) => state.movieSlice);

  const fetchAndStoreMovies = async (existingData, apiCall, action) => {
    if (existingData?.length) return;

    try {
      const response = await apiCall();
      dispatch(action(response));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const loadBrowseData = async () => {
    await Promise.all([
      fetchAndStoreMovies(now_playing, getNowPlayingMovie, setNowPlaying),

      fetchAndStoreMovies(popular_movies, getMyPopularMovies, setPopularMovies),

      fetchAndStoreMovies(
        top_rated_movies,
        getTopRatedMovies,
        setTopRatedMovies,
      ),

      fetchAndStoreMovies(
        upcoming_movies,
        getUpcomingMovies,
        setUpcomingMovies,
      ),

      fetchAndStoreMovies(
        top_rated_series,
        getTopRatedSeries,
        setTopRatedSeries,
      ),
    ]);
  };

  useEffect(() => {
    loadBrowseData();
  }, []);

  return (
    <>
      <Header />
      {showGptSearch ? <GPTSearch /> : <VideoContainer />}
    </>
  );
};

export default Browse;
