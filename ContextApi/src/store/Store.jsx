import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/cartSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
