import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    initializeMessage: (state, action) => {
      state = action.payload;
    },
    uninitializeMessage: (state, action) => {
      if (action.payload === null) {
        state = null;
      }
    },
  },
});

export const { initializeMessage, uninitializeMessage } =
  notificationSlice.actions;
export default notificationSlice.reducer;
