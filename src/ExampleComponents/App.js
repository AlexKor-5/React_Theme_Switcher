import React from "react";
import {useTheme} from "./themeStore";

export default function App() {
    const {theme, setTheme} = useTheme();
    const text = (theme === "light") ? "Turn on" : "Turn off";
    const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <div>
            <input
                type="button"
                defaultValue={text}
                // в стили вынесите этот курсор)
                style={{cursor: "pointer"}}
                onClick={switchTheme}
            />
        </div>
    );
}