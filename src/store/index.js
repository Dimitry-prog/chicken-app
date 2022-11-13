import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
    }
});

