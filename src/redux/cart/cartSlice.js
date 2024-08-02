import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.carts.push(action.payload);
    },
    removeItem: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.carts = [];
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state, action) => {
      state.status = "failer";
      state.error = action.payload;
    },
    setLoaded: (state) => {
      state.status = "succeeded";
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  setLoading,
  setError,
  setLoaded,
} = cartSlice.actions;
export default cartSlice.reducer;
