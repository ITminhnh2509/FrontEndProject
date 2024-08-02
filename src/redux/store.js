import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cart/cartSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});
export default store;
