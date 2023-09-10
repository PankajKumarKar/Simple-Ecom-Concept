import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = Object.freeze({
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
});

const initialState = {
  productData: [],
  status: STATUS.IDLE,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // setProducts: (state, action) => {
    //   state.productData = action.payload;
    // },
    // setStatus: (state, action) => {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//thunks
// export function fetchProducts() {
//   return async function fetchProductsThunks(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const res = await axios.get("https://fakestoreapi.com/products");
//       dispatch(setProducts(res.data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       console.log("error whle Fetching ", error);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }

//Create Async Thunk
export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});
