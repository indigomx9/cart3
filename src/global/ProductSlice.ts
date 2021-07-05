import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./RootReducer";

export interface Product {
    id: string,
    title: string,
    price: number
};

const initialState: Product[] = [
    { id: "aa", title: "Shirt", price: 30 },
    { id: "bb", title: "Pants", price: 40 },
    { id: "cc", title: "Shoes", price: 50 },
];

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            return state.filter(
                (product) => product.id !== action.payload
            );
        },
    },
});

export const getProductSelector = (state: RootState) => state.products;
export const { addProduct, removeProduct } = ProductSlice.actions;
export const ProductReducer = ProductSlice.reducer;




