import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    loadingState: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { loadingState } = loadingSlice.actions;
export default loadingSlice.reducer;
