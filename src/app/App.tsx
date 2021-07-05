import React from "react";
import { Provider } from "react-redux";
import { RootReducer } from "../global/RootReducer";
import { Main } from "../components/Main";
import "./App.css";

export const App = (): JSX.Element => {
    return (
        <Provider store={RootReducer}>
            <React.Fragment>
                <Main />
            </React.Fragment>
        </Provider>
    );
};




