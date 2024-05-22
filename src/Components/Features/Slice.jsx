import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
  Products:[],
  Allproducts:[],
  items: 0,
  total: 0,
  loading: false,
  error: null,
};
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch product");
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);

const ProductReducer = createSlice({
  name: "Products",
  initialState,
  reducers: {
    add(state, action) {
      state.cart.push(action.payload);
    },
    remove(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
    deleteobject(state) {
      state.Products = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.Allproducts = action.payload;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.Allproducts = null;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.Products = action.payload;
        console.log(action.payload);
        state.error = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.Products = null;
        state.error = action.error.message;
      });
  },
});

export const { add, remove, deleteobject, increaseamount ,decreaseamount} = ProductReducer.actions;
export default ProductReducer.reducer;
