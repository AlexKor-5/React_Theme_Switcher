import React from "react";
import ReactDOM from "react-dom";
import "./variables.css";
import "./index.css";
import {SomeSetOfComponents} from "./components/SomeSetOfComponents/SomeSetOfComponents";
// import ThemeApp from "./components/ThemeApp/ThemeApp";
// import {ThemeDataContext} from "./components/ThemeDataContext/ThemeDataContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import App from "./ExampleComponents/App";
import {ThemeProvider} from "./ExampleComponents/themeStore";

let destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <React.StrictMode>
            <ErrorBoundary>
                <SomeSetOfComponents/>
                {/*<ThemeDataContext>*/}
                {/*    <ThemeApp/>*/}
                {/*</ThemeDataContext>*/}
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </React.StrictMode>
    </>,
    destination
);