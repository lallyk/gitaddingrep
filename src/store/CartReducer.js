import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existItem.quantity++;
        existItem.totalPrice = existItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existItem.quantity--;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
