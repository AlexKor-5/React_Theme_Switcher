import React, {useEffect, useState, useMemo, useCallback} from "react";
import DarkStyles from "../DarkStyles/DarkStyles";

// export const ThemeSwitcherApp = () => {
//     const key = "DARK_THEME";
//     const saveJSON = (key, data) => {
//         if (window[`localStorage`] === null) return
//         return localStorage.setItem(key, JSON.stringify(data));
//     };
//     const loadJSON = key => {
//         if (window[`localStorage`] === null) return
//         return key && JSON.parse(localStorage.getItem(key));
//     };
//
//     const [themeIsActive, setThemeIsActive] = useState(loadJSON(key) ?
//         loadJSON(key).darkMode : false);
//     const [button_text_value, setButton_text_value] = useState(themeIsActive ? "Turn off" : "Turn on");
//
//     const theme_data_false = useMemo(() => ({darkMode: false}), []);
//     const theme_data_true = useMemo(() => ({darkMode: true}), []);
//
//     const insertDarkStyles = (where) => {
//         const style = document.createElement(`style`);
//         style.setAttribute(`id`, `dark-mode`);
//         style.innerHTML = DarkStyles;
//         where.append(style);
//     };
//
//     const activeDarkTheme = useCallback(
//         () => {
//             insertDarkStyles(document.getElementsByTagName(`head`)[0]);
//             setButton_text_value("Turn off");
//             saveJSON(key, theme_data_true);
//         }, [theme_data_true]
//     )
//     const deactivateDarkTheme = useCallback(
//         () => {
//             const isDarkModeExist = !!document.getElementById(`dark-mode`);
//             if (isDarkModeExist) {
//                 document.getElementById(`dark-mode`).remove();
//                 setButton_text_value("Turn on");
//                 saveJSON(key, theme_data_false);
//             }
//         }, [theme_data_false]
//     )
//
//     const themeStorageLoading = useCallback(
//         (key, data) => {
//             if (!localStorage.getItem(key)) {
//                 saveJSON(key, data);
//             } else {
//                 if (loadJSON(key).darkMode) {
//                     activeDarkTheme();
//                 } else {
//                     deactivateDarkTheme();
//                 }
//             }
//         }, [activeDarkTheme, deactivateDarkTheme]);
//
//     useEffect(() => { // Once Loading
//         themeStorageLoading(key, theme_data_false);
//     }, [theme_data_false, themeStorageLoading]);
//
//     const buttonAction = (bool_value) => {
//         setThemeIsActive(bool_value);
//         if (bool_value) activeDarkTheme();
//         else deactivateDarkTheme();
//     };
//
//     return (
//         <div>
//             <input type="button"
//                    onClick={() => buttonAction(!themeIsActive)}
//                    defaultValue={button_text_value}
//                    style={{cursor: "pointer"}}
//             />
//         </div>
//     );
// }