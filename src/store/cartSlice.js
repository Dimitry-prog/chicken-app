import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems') ?? '[]'),
  isShowCart: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existedInBasket = state.cartItems.find(elem => elem.id === newItem.id);
      if(existedInBasket) {
        existedInBasket.quantity++;
      } else {
        state.cartItems.push(newItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existedInBasket = state.cartItems.find(elem => elem.id === id);
      if (existedInBasket.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      } else {
        existedInBasket.quantity--;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    },
    setIsShowCart(state) {
      state.isShowCart = !state.isShowCart;
    }
  }
});

export const {addItemToCart, removeItemFromCart, clearCart, setIsShowCart} = cartSlice.actions;

export default cartSlice.reducer;