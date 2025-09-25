import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface Counter {
  value: number;
}

const initialCounter: Counter = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export const selectCounterValue = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
