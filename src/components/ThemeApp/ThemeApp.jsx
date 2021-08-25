import React, {useEffect} from "react";
import {useFunctionsOfTheme} from "../ThemeContextProvider/ThemeContextProvider";
import {useThemeDataContext} from "../ThemeDataContext/ThemeDataContext";
import {useThemeStorage} from "../../hooks/useThemeStorage";

export const ThemeApp = () => {
    const {button_text_value, theme_data_false, setThemeIsActive, key} = useThemeDataContext();
    const {themeStorageLoading} = useThemeStorage();
    const {activeDarkTheme, deactivateDarkTheme} = useFunctionsOfTheme();

    useEffect(() => { // Once Loading
        themeStorageLoading(key, theme_data_false);
    }, [themeStorageLoading, key, theme_data_false]);

    const buttonAction = (bool_value) => {
        setThemeIsActive(bool_value);
        if (bool_value) activeDarkTheme();
        else deactivateDarkTheme();
    };

    return (
        <>
            <div>
                <input type="button"
                       defaultValue={button_text_value}
                       style={{cursor: "pointer"}}
                       onClick={buttonAction}
                />
            </div>
        </>
    )
}
