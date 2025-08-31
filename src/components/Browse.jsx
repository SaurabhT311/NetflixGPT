import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { setNowPlaying } from "../utils/movieSlice";
import useMovies from "../hooks/useMovies";
import VideoContainer from "./VideoComponent";

const Browse = () => {
  const dispatch = useDispatch();
  const { getNowPlayingMovie } = useMovies();

  const handleNowPlayingMovie = async () => {
    try {
      const response = await getNowPlayingMovie();
      dispatch(setNowPlaying(response));
    } catch (error) {}
  };

  useEffect(() => {
    handleNowPlayingMovie();
  }, []);

  return (
    <div>
      <Header />
      <VideoContainer />
    </div>
  );
};

export default Browse;
