import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  new_account: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      return { user: [] };
    },
    setNewAccount: (state, action) => {
      state.new_account = action.payload;
    },
  }
});

export const { setUser, removeUser, setNewAccount } = userSlice.actions;
export default userSlice.reducer;
