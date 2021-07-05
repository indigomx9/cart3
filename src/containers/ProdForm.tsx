import React from "react";
import { addProduct, Product } from "../global/ProductSlice";
import { useAppDispatch } from "../global/RootHooks";

export const ProdForm = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [product, setProduct] = React.useState<Product>({
        id: "", title: "", price: 0
    });

    const handleChange = ({ target: { name, value}}: 
        React.ChangeEvent<HTMLInputElement>) => 
        setProduct((prev) => {
            (prev as any)[name] = value;
            const newValue = {...prev}
            return newValue;
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addProduct(product));
    };
    const { id, title, price } = product;

    return (
        <React.Fragment>
            <h1>Add Game</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="id"
                    name="id"
                    value={id}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="game title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <input 
                    type="number"
                    placeholder="price"
                    name="price"
                    value={price}
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
        </React.Fragment>
    );
};




