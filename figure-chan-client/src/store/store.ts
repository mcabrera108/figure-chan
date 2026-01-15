import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/slices/userSlice";
import loadingReducer from "../features/slices/loadingSlice";
import notificationReducer from "../features/slices/notificationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
