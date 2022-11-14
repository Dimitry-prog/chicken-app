import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
        cart: cartSlice,
    }
});

