import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const VideoComponent = () => {
  const movies = useSelector((state) => state.movieSlice?.now_playing) || [];

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie || {};
  console.log("mainMovie", original_title, id);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default VideoComponent;
