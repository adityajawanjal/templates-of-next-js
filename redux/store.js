import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./addSlice";

export const store = configureStore({
  reducer: {
    add: addReducer,
  },
  devTools: true,
});
