import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  currentPage: 1,
  status: "start",
  error: "",
  totalPage: 30,
  product: {}, // Add this to hold a single product's details
};

const urlAPI =
  "https://66a07ba77053166bcabb8de3.mockapi.io/studentt/v1/products";

export const fetchDataProduct = createAsyncThunk(
  "products/fetchDataProducts",
  async (page) => {
    const res = await axios.get(`${urlAPI}?page=${page}&&limit=8`);
    return res.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await axios.get(`${urlAPI}/${id}`);
    return response.data;
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
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
