import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface User {
  name: string;
  age: number;
  email: string;
  isVerified: boolean;
}

// Pick - provide an object or type, allows you to pick one or more  from the user interface
// Omit - provide an object or type, allows you to omit one from the user interface
export type BaseUser = Omit<User, "isVerified">;

const initialUser: User = {
  name: "user",
  age: 0,
  email: "",
  isVerified: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    verify: (state) => {
      state.isVerified = true;
    },
    update: (state, action: PayloadAction<BaseUser>) => {
      state.name = action.payload.name;
    },
  },
});

export const { verify, update } = userSlice.actions;
export const selectUserState = (state: RootState) => state.user;

export default userSlice;
