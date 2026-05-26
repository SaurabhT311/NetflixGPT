import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  now_playing: null,
  trailer_video: null,
  popular_movies: null,
  top_rated_movies: null,
  upcoming_movies: null,
  top_rated_series: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlaying: (state, action) => {
      state.now_playing = action.payload;
    },
    setTrailerVideo: (state, action) => {
      state.trailer_video = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popular_movies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.top_rated_movies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcoming_movies = action.payload;
    },
    setTopRatedSeries: (state, action) => {
      state.top_rated_series = action.payload;
    },
  },
});

export const { setNowPlaying, setTrailerVideo, setPopularMovies, setTopRatedMovies, setUpcomingMovies, setTopRatedSeries } = movieSlice.actions;
export default movieSlice.reducer;
