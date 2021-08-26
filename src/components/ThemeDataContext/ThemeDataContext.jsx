import React, {useContext, useState} from "react";
import {useThemeStorage} from "../../hooks/useThemeStorage";
import {ThemeContextProvider} from "../ThemeContextProvider/ThemeContextProvider";
import {defaultValue} from "../default";

const key = "DARK_THEME";
const MyThemeDataContext = React.createContext(defaultValue);
export const useThemeDataContext = () => useContext(MyThemeDataContext);

export const ThemeDataContext = ({children}) => {
    const {loadJSON} = useThemeStorage();

    const [themeIsActive, setThemeIsActive] = useState(loadJSON(key) ?
        loadJSON(key).darkMode : false);
    const [button_text_value, setButton_text_value] = useState(themeIsActive ? "Turn off" : "Turn on");

    const theme_data_false = {darkMode: false};
    const theme_data_true = {darkMode: true};

    return (
        <MyThemeDataContext.Provider value={{
            themeIsActive,
            button_text_value,
            theme_data_false,
            theme_data_true,
            key,
            setThemeIsActive,
            setButton_text_value
        }}>
            <ThemeContextProvider>
                {children}
            </ThemeContextProvider>
        </MyThemeDataContext.Provider>
    )
}