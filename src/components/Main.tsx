import React from "react";
import { ProductList } from "./ProductList";
import { ProdForm } from "../containers/ProdForm";
import { Cart } from "./Cart";

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <ProductList />
            <ProdForm />
            <Cart />
        </React.Fragment>
    );
};




