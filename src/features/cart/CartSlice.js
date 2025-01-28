import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

// 買い物かごの初期化
const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // state.cartItems = [];
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      cartItem.amount = cartItem.amount - 1;
    },
  },
})

console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
