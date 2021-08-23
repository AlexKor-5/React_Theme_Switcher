import React from "react";
import ReactDOM from "react-dom";
import "./variables.css";
import "./index.css";
import {SomeSetOfComponents} from "./components/SomeSetOfComponents/SomeSetOfComponents";
import {ThemeSwitcherApp} from "./components/ThemeSwitcherApp/ThemeSwitcherApp";

let destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <SomeSetOfComponents/>
        <ThemeSwitcherApp/>
    </>,
    destination
);