import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./ProductSlice";
import { CartReducer } from "./CartSlice";

export const RootReducer = configureStore({
    reducer: {
        products: ProductReducer,
        cart: CartReducer
    }
});

export type RootState = 
    ReturnType<typeof RootReducer.getState>;
export type AppDispatch = 
    typeof RootReducer.dispatch;



