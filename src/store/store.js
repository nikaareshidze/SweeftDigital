import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./historySlice";

const store = configureStore({
  reducer: {
    historySlice: historySlice.reducer,
  },
});

export default store;
