import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isShowCart: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemToCart(state, action) {
      state.cartItems = action.payload;
    },
    setIsShowCart(state) {
      state.isShowCart = !state.isShowCart;
    }
  }
});

export const {setItemToCart, setIsShowCart} = cartSlice.actions;

export default cartSlice.reducer;