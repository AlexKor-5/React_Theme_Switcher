const saveJSON = (key, data) => {
    if (window[`localStorage`] === null) return
    return localStorage.setItem(key, JSON.stringify(data));
};
const loadJSON = key => {
    if (window[`localStorage`] === null) return
    return key && JSON.parse(localStorage.getItem(key));
};

const themeStorageLoading = (key, data, isActive = f => f, isDeactivated = f => f) => {
    if (!localStorage.getItem(key)) {
        saveJSON(key, data);
    } else {
        if (loadJSON(key).darkMode) {
            isActive(); //activeDarkTheme();
        } else {
            isDeactivated();//deactivateDarkTheme();
        }
    }
};
export const useThemeStorage = () => ({saveJSON, loadJSON, themeStorageLoading});

