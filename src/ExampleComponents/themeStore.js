import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (window.localStorage && window.localStorage.getItem("theme") === "dark") {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        const method = theme === "dark" ? "add" : "remove";
        document.documentElement.classList[method]("dark-mode");
        if (window.localStorage) window.localStorage.setItem("theme", theme);
    }, [theme]);

    const value = {theme, setTheme};

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export const useTheme = () => {
    return useContext(ThemeContext);
};