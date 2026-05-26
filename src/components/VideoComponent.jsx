import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import MovieListComponent from "./MovieListComponent";

const VideoComponent = () => {
  const movies = useSelector((state) => state.movieSlice?.now_playing) || [];

  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie || {};

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      <MovieListComponent />
    </div>
  );
};

export default VideoComponent;
