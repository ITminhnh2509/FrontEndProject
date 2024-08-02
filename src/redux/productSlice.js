import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  currentPage: 1,
  status: "start",
  error: "",
  totalPage: 30,
};

const urlAPI =
  "https://66a07ba77053166bcabb8de3.mockapi.io/studentt/v1/products";

export const fetchDataProduct = createAsyncThunk(
  "products/fetchDataProducts",
  async (page) => {
    const res = await axios.get(`${urlAPI}?page=${page}&&limit=5`);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchDataProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
