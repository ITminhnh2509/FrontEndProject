import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  currentPage: 1,
  status: "start",
  error: "",
  totalPage: 30,
  product: {},
};

const urlAPI =
  "https://66a07ba77053166bcabb8de3.mockapi.io/studentt/v1/products";
export const fetchDataProduct = createAsyncThunk(
  "products/fetchDataProducts",
  async ({ page, searchTerm, category, material }) => {
    let query = `${urlAPI}?page=${page}&limit=8`;
    if (searchTerm) query += `&name=${searchTerm}`;
    if (category) query += `&category=${category}`;
    if (material) query += `&material=${material}`;
    const res = await axios.get(query);

    const categories = [
      ...new Set(res.data.map((product) => product.category)),
    ];
    const materials = [...new Set(res.data.map((product) => product.material))];

    return { products: res.data, categories, materials, totalPage: 30 };
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
        state.products = action.payload.products;
        state.categories = action.payload.categories;
        state.materials = action.payload.materials;
        state.totalPage = action.payload.totalPage;
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
