import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item with the same 'id' exists in the cart, update its quantity.
        existingItem.quantity++; // Increment the quantity of the existing item.
      } else {
        // If the item is not in the cart, add it as a new item.
        state.push({ ...newItem, quantity: 1 }); // Initialize quantity to 1 for new items.
      }
    },

    removeCart: (state, action) => {
      // Remove the item with the specified id from the cart.
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
