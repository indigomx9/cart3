import React from "react";
import { useAppDispatch, 
    useAppSelector } from "../global/RootHooks";
import { getCartProducts, getTotalPrice, 
    removeFromCart } from "../global/CartSlice";

export const Cart = (): JSX.Element => {
    const cartProducts = useAppSelector(getCartProducts);
    const totalPrice = useAppSelector(getTotalPrice);
    const dispatch = useAppDispatch();

    const handleRemove = (productId: string) => 
    dispatch(removeFromCart(productId));
    
    return (
        <React.Fragment>
            <h2>Cart</h2>
            <h5>{totalPrice}</h5>
            {cartProducts.map((product) => (
                <main key={product.id}>
                    <span>{product.title}</span>
                    <span>{product.amount}</span>
                    <button
                        onClick={() => handleRemove(product.id)}
                        >X
                    </button>
                </main>
            ))}
        </React.Fragment>
    );
};





