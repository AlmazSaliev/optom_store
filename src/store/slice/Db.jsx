import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAll = createAsyncThunk("data/getAll", async () => {
  try {
    return await fetch("http://10.10.10.24:9091/product/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  } catch (error) {
    return [];
  }
});
export const findById = createAsyncThunk("data/findById", async (id) => {
  try {
    return await fetch("http://10.10.10.24:9091/product/findById/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  } catch (error) {
    return [];
  }
});
const Db = createSlice({
  name: "data",
  initialState: {
    data: [],
    find_db: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(findById.fulfilled, (state, action) => {
        state.find_db = action.payload;
      });
  },
});
export const DataBase = Db.actions;
export default Db;
