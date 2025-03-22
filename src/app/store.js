import { configureStore } from "@reduxjs/toolkit";
import prouductReducer from "../features/product/productSlice";
import cardReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    product: prouductReducer,
    cart: cardReducer,
  },
});

export default store;
