const saveJSON = (key, data) => {
    if (window[`localStorage`] === null) return
    return localStorage.setItem(key, JSON.stringify(data));
};
const loadJSON = key => {
    if (window[`localStorage`] === null) return
    return key && JSON.parse(localStorage.getItem(key));
};


let truly = true; //for once start loading
const themeStorageLoading = (key, data, activeDarkTheme = f => f, deactivateDarkTheme = f => f) => {
    if (!localStorage.getItem(key)) {
        saveJSON(key, data); //create local storage info
    } else {
        if (loadJSON(key).darkMode) {
            if (truly)
                activeDarkTheme();
            truly = false;
        } else {
            deactivateDarkTheme();
        }
    }
    console.log("themeStorageLoading func works");
};

const loaderDataOfStorage = (activeTheme = f => f) => {
    if (localStorage.getItem("DARK_THEME"))
        if (!!JSON.parse(localStorage.getItem("DARK_THEME")).darkMode === true) {
            console.log("cond is true");
            activeTheme();
        }
};

export const useThemeStorage = () => ({saveJSON, loadJSON, themeStorageLoading, loaderDataOfStorage});
