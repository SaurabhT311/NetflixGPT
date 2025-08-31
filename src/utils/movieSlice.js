import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  now_playing: null,
  trailer_video: null
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
    }
  },
});

export const { setNowPlaying, setTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
