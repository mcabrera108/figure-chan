import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    initializeMessage: (_state, action) => {
      _state = action.payload;
    },
    uninitializeMessage: (_state, action) => {
      if (action.payload === null) {
        _state = null;
      }
    },
  },
});

export const { initializeMessage, uninitializeMessage } =
  notificationSlice.actions;
export default notificationSlice.reducer;
