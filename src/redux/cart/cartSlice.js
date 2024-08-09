import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: JSON.parse(localStorage.getItem("carts")) || [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,
  totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
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

      // Save updated cart state to localStorage
      localStorage.setItem("carts", JSON.stringify(state.carts));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.carts.find((item) => item.id === id);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalAmount -= itemToRemove.totalPrice;

        state.carts = state.carts.filter((item) => item.id !== id);
      }

      // Save updated cart state to localStorage
      localStorage.setItem("carts", JSON.stringify(state.carts));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
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

      // Save updated cart state to localStorage
      localStorage.setItem("carts", JSON.stringify(state.carts));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },
    clearCart: (state) => {
      state.carts = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      // Clear cart data from localStorage
      localStorage.removeItem("carts");
      localStorage.removeItem("totalAmount");
      localStorage.removeItem("totalQuantity");
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
