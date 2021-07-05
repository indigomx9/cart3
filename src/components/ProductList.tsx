import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../global/RootHooks";
import { addToCart } from "../global/CartSlice";
import { getProductSelector, removeProduct, 
    Product } from "../global/ProductSlice";

export const ProductList = (): JSX.Element => {
    const products = useSelector(getProductSelector);
    const dispatch = useAppDispatch();

    const remove = (id: string) => {
        dispatch(removeProduct(id));
    };

    const addToCartHandler = (product: Product) => 
        dispatch(addToCart(product));

    return (
        <React.Fragment>
            <h2>Clothing List</h2>
            {products.map((product) => (
                <main key={product.id}>
                    <span>{`${product.title} : ${product.price}`}</span>
                    <button
                        onClick={() => addToCartHandler(product)}
                        >add to cart
                    </button>
                    <button
                        onClick={() => remove(product.id)}
                        >X
                    </button>
                </main>
            ))}
        </React.Fragment>
    );
};





