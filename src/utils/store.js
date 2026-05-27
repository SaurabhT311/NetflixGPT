import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import languageSlice from "./languageSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    movieSlice: movieSlice,
    gptSlice: gptSlice,
    languageSlice: languageSlice,
  },
});

export default store;
