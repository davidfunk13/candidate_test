import { RootState } from "../../../rootStore";
import CatSliceState from "./catSliceState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getCatFacts from "../../thunks/catInformation/getCatFacts";

export const initialState: CatSliceState = {
  factsLoading: false,
  factsError: undefined,
  facts: []
};

export const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setFacts: (state: CatSliceState, action) => {
      state.facts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatFacts.pending, (state: CatSliceState, action) => {
        state.factsLoading = true;
      })
      .addCase(getCatFacts.fulfilled, (state: CatSliceState, action) => {
        state.factsLoading = false;
        state.facts = [...state.facts, action.payload.data[0].fact];
      })
      .addCase(
        getCatFacts.rejected,
        (state: CatSliceState, action: PayloadAction<unknown>) => {
          state.factsLoading = false;
          state.facts = [];
          state.factsError = action.payload as string;
        }
      );
  }
});

export const catsSelector = (state: RootState) => state.cats;

export const { setFacts } = catSlice.actions;

export default catSlice.reducer;
