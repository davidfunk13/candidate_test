import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstance as axios} from "../../../utils/axiosInstance";

export const getCatFacts = createAsyncThunk(
  "cats/facts",
  (_, { dispatch, getState, rejectWithValue }) => {
    return axios
      .get("/facts?limit=1")
      .then((resp: AxiosResponse) => {
        return resp.data;
      })
      .catch((err) => {
        return rejectWithValue(err.toString());
      });
  }
);

export default getCatFacts;
