import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { setNowPlaying, setPopularMovies, setTopRatedMovies, setTopRatedSeries, setUpcomingMovies } from "../utils/movieSlice";
import useMovies from "../hooks/useMovies";
import VideoContainer from "./VideoComponent";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const dispatch = useDispatch();
  const { getNowPlayingMovie, myPopularMovies, topRatedMovies, upcomingMovies, topRatedSeriesList } = useMovies();
  const showGptSearch = useSelector((state) => state.gptSlice.showGptSearchView);

  const handleNowPlayingMovie = async () => {
    try {
      const response = await getNowPlayingMovie();
      dispatch(setNowPlaying(response));
    } catch (error) {}
  };

  const getMyPopularMovies = async () => {
    try {
      const response = await myPopularMovies();
      dispatch(setPopularMovies(response));
      console.log("popular movies in browse", response);
    } catch (error) {}
  }

  const getTopRatedMovies = async () => {
    try {
      const response = await topRatedMovies();
      dispatch(setTopRatedMovies(response));
      console.log("top rated movies in browse", response);
    } catch (error) {}
  }

  const getUpcomingMovies = async () => {
    try {
      const response = await upcomingMovies();
      dispatch(setUpcomingMovies(response));
      console.log("upcoming movies in browse", response);
    } catch (error) {}
  }

  const getTopRatedSeries = async () => {
    try {
      const response = await topRatedSeriesList();
      dispatch(setTopRatedSeries(response));
      console.log("top rated series in browse", response);
    } catch (error) {
      console.log("error in getting top rated series", error);
    }
  };

  useEffect(() => {
    handleNowPlayingMovie();
    getMyPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
    getTopRatedSeries();
  }, []);

  return (
    <div>
      <Header />
      {showGptSearch ? <GPTSearch /> : <VideoContainer />}
    </div>
  );
};

export default Browse;
