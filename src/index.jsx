import React from "react";
import ReactDOM from "react-dom";
import "./variables.css";
import "./index.css";
import {SomeSetOfComponents} from "./components/SomeSetOfComponents/SomeSetOfComponents";
import ThemeApp from "./components/ThemeApp/ThemeApp";
import {ThemeDataContext} from "./components/ThemeDataContext/ThemeDataContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

let destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <React.StrictMode>
            <ErrorBoundary>
                <SomeSetOfComponents/>
                <ThemeDataContext>
                    <ThemeApp/>
                </ThemeDataContext>
            </ErrorBoundary>
        </React.StrictMode>
    </>,
    destination
);