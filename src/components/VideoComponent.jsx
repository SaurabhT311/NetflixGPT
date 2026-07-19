import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import MovieListComponent from "./MovieListComponent";

const VideoComponent = () => {
  const [showLists, setShowLists] = useState(false);
  const movies = useSelector((state) => state.movieSlice?.now_playing) || [];

  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie || {};

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowLists(true);
  }, 500);

  return () => clearTimeout(timer);
}, []);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      {showLists && <MovieListComponent />}
    </div>
  );
};

export default VideoComponent;
