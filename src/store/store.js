import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import movieSlice from "./slices/movieSlice";
import gptSlice from "./slices/gptSlice";
import languageSlice from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    movieSlice: movieSlice,
    gptSlice: gptSlice,
    languageSlice: languageSlice,
  },
});

export default store;
