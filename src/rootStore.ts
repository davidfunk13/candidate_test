import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import catSlice from "./store/reducers/cat/catSlice";
import userSlice from "./store/reducers/user/userSlice";

const rootStore = configureStore({
  reducer: {
    user: userSlice,
    cats: catSlice
  }
});

export type AppDispatch = typeof rootStore.dispatch;
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default rootStore;
