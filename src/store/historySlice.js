import { createSlice } from "@reduxjs/toolkit";

const historyInitialState = {
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState: historyInitialState,
  reducers: {
    setHistory(state, actions) {
      state.history = [...state.history, actions.payload];
    },
  },
});

export const historyActions = historySlice.actions;

export default historySlice;
