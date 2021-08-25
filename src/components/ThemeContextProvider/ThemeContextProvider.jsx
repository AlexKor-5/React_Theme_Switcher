import React, {useContext} from "react";
import {useThemeStorage} from "../../hooks/useThemeStorage";
import DarkStyles from "../DarkStyles/DarkStyles";
import {useThemeDataContext} from "../ThemeDataContext/ThemeDataContext";
import {defaultValue} from "../ThemeDataContext/ThemeDataContext";

const MyThemeContext = React.createContext(defaultValue);
export const useFunctionsOfTheme = () => useContext(MyThemeContext);

export const ThemeContextProvider = ({children}) => {
    const {theme_data_false, theme_data_true, setButton_text_value, key} = useThemeDataContext();
    const {saveJSON} = useThemeStorage();

    const insertDarkStyles = (where) => {
        const style = document.createElement(`style`);
        style.setAttribute(`id`, `dark-mode`);
        style.innerHTML = DarkStyles;
        where.append(style);
    };

    const activeDarkTheme = () => {
        insertDarkStyles(document.getElementsByTagName(`head`)[0]);
        setButton_text_value("Turn off");
        saveJSON(key, theme_data_true);
    };

    const deactivateDarkTheme = () => {
        const isDarkModeExist = !!document.getElementById(`dark-mode`);
        if (isDarkModeExist) {
            document.getElementById(`dark-mode`).remove();
            setButton_text_value("Turn on");
            saveJSON(key, theme_data_false);
        }
    }

    return (
        <MyThemeContext.Provider value={{activeDarkTheme, deactivateDarkTheme}}>
            {children}
        </MyThemeContext.Provider>
    )
}