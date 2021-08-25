import UserSliceState from "./userSliceState";
import { RootState } from "../../../rootStore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: UserSliceState = {
  name: "",
  email: "",
  address: "",
  isAbleToWriteUnitTests: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state: UserSliceState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state: UserSliceState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAddress: (state: UserSliceState, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setTestAbility: (state: UserSliceState, action: PayloadAction<boolean>) => {
      state.isAbleToWriteUnitTests = action.payload;
    }
  }
});

export const userSelector = (state: RootState) => state.user;

export const {
  setName,
  setEmail,
  setAddress,
  setTestAbility
} = userSlice.actions;

export default userSlice.reducer;
