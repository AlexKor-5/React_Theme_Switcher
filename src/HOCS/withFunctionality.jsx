import React, {useEffect} from "react";
import {useThemeDataContext} from "../components/ThemeDataContext/ThemeDataContext";
import {useThemeStorage} from "../hooks/useThemeStorage";
import {useFunctionsOfTheme} from "../components/ThemeContextProvider/ThemeContextProvider";

const withFunctionality = () => {

    return (Component) => {
        return () => {
            const {
                themeIsActive,
                button_text_value,
                theme_data_false,
                setThemeIsActive,
                key
            } = useThemeDataContext();
            const {themeStorageLoading} = useThemeStorage();
            const {activeDarkTheme, deactivateDarkTheme} = useFunctionsOfTheme();

            useEffect(() => {
                themeStorageLoading(key, theme_data_false, activeDarkTheme, deactivateDarkTheme);
            }, [themeStorageLoading, key, theme_data_false, activeDarkTheme, deactivateDarkTheme]);


            const buttonAction = (bool_value) => {
                setThemeIsActive(bool_value);
                if (bool_value) activeDarkTheme();
                else deactivateDarkTheme();
            };

            return (
                <Component text={button_text_value} functionality={() => buttonAction(!themeIsActive)}/>
            )
        }
    }
}

export default withFunctionality;