import React, {useContext, useMemo, useState} from "react";
import {useThemeStorage} from "../../hooks/useThemeStorage";

export const defaultValue = {darkMode: false};
const key = "DARK_THEME";
const MyThemeDataContext = React.createContext(defaultValue);
export const useThemeDataContext = () => useContext(MyThemeDataContext);

export const ThemeDataContext = ({children}) => {
    const {loadJSON} = useThemeStorage();

    const [themeIsActive, setThemeIsActive] = useState(loadJSON(key) ?
        loadJSON(key).darkMode : false);
    const [button_text_value, setButton_text_value] = useState(themeIsActive ? "Turn off" : "Turn on");

    const theme_data_false = useMemo(() => ({darkMode: false}), []);
    const theme_data_true = useMemo(() => ({darkMode: true}), []);

    return (
        <MyThemeDataContext.Provider value={{
            themeIsActive,
            button_text_value,
            theme_data_false,
            theme_data_true,
            key,
            defaultValue,
            setThemeIsActive,
            setButton_text_value
        }}>
            {children}
        </MyThemeDataContext.Provider>
    )
}