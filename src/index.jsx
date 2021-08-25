import React from "react";
import ReactDOM from "react-dom";
import "./variables.css";
import "./index.css";
import {SomeSetOfComponents} from "./components/SomeSetOfComponents/SomeSetOfComponents";
// import {ThemeSwitcherApp} from "./components/ThemeSwitcherApp/ThemeSwitcherApp";
import {ThemeContextProvider} from "./components/ThemeContextProvider/ThemeContextProvider";
import {ThemeApp} from "./components/ThemeApp/ThemeApp";
import {ThemeDataContext} from "./components/ThemeDataContext/ThemeDataContext";

let destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <React.StrictMode>
            <SomeSetOfComponents/>
            {/*<ThemeSwitcherApp/>*/}

            <ThemeDataContext>
                <ThemeContextProvider>
                    <ThemeApp/>
                </ThemeContextProvider>
            </ThemeDataContext>
        </React.StrictMode>
    </>,
    destination
);