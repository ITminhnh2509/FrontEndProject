import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totalAmount: 0,
  totalQuantity: 0,
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.carts.find((item) => item.id === newItem.id);

      if (existingItem) {
        const quantityDifference = newItem.quantity - existingItem.quantity;
        existingItem.quantity = newItem.quantity;
        existingItem.totalPrice = newItem.quantity * existingItem.price;

        state.totalQuantity += quantityDifference;
        state.totalAmount += newItem.price * quantityDifference;
      } else {
        state.carts.push({
          ...newItem,
          totalPrice: newItem.quantity * newItem.price,
        });

        state.totalQuantity += newItem.quantity;
        state.totalAmount += newItem.quantity * newItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.carts.find((item) => item.id === id);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalAmount -= itemToRemove.totalPrice;

        state.carts = state.carts.filter((item) => item.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.carts.find((item) => item.id === id);

      if (item) {
        const oldQuantity = item.quantity;
        item.quantity = quantity;
        item.totalPrice = quantity * item.price;

        state.totalQuantity += quantity - oldQuantity;
        state.totalAmount += item.price * (quantity - oldQuantity);
      }
    },
    clearCart: (state) => {
      state.carts = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state, action) => {
      state.status = "failed";
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
  updateQuantity,
  clearCart,
  setLoading,
  setError,
  setLoaded,
} = cartSlice.actions;

export default cartSlice.reducer;
