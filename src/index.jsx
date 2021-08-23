import React from "react";
import ReactDOM from "react-dom";
import "./variables.css";
import "./index.css";
// import "./dark_variables.css";
import {TypicalCss} from "./components/TypicalCss/TypicalCss";
import {SomeSetOfComponents} from "./components/SomeSetOfComponents/SomeSetOfComponents";
import {ThemeSwitcherApp} from "./components/ThemeSwitcherApp/ThemeSwitcherApp";

let destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <TypicalCss/>
        <SomeSetOfComponents/>
        <ThemeSwitcherApp/>
    </>,
    destination
);