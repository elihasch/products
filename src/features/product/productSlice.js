import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../servers/config";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const fetchProducts = createAsyncThunk("product/fetchProducts ", () => {
  return api.get("/products");
});

const productsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
