import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGptSearchView: false,
  searchedMovie: null,
  movieResults: null,
};

const gptSlice = createSlice({
  name: "gptSlice",
  initialState,
  reducers: {
    toggleGptSearchview: (state, action) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
    addGeminiMovieResult: (state, action) => {
      const { searchedMovie, movieResults } = action.payload;
      state.searchedMovie = searchedMovie;
      state.movieResults = movieResults;
    },
  },
});
export const { toggleGptSearchview, addGeminiMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
