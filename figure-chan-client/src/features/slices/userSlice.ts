import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    profileLink: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.profileLink = action.payload.profileLink;
    },
    logoutUser: (state, action) => {
      if (
        action.payload.username === null ||
        action.payload.profileLink === null
      ) {
        state.username = null;
        state.profileLink = null;
      }
      return state;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
