import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
