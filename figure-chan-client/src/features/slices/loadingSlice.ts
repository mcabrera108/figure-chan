import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    loadingState: (_state, action) => {
      _state = action.payload;
    },
  },
});

export const { loadingState } = loadingSlice.actions;
export default loadingSlice.reducer;
