import React, { useEffect, useState } from "react";
import useMovies from "../hooks/useMovies";
import { useDispatch, useSelector } from "react-redux";
import { setTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  // const [movieTrailer, setMovieTrailer] = useState("");
  const { getMovieBackgroundTrailer } = useMovies();
  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => state.movieSlice?.trailer_video);

  useEffect(() => {
    if (movieId) {
      getMovieTrailer();
    }
  }, [movieId]);

  const getMovieTrailer = async () => {
    try {
      const response = await getMovieBackgroundTrailer(movieId);
      const filterData = response.results.filter(
        (video) => video?.type === "Trailer"
      );
      const trailer = filterData?.length ? filterData[0] : response.results[0]; //Incase there is no trailer, get the first video
      dispatch(setTrailerVideo(trailer));
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=0&loop=0&wmode=transparent&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
