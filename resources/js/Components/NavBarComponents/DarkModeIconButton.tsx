import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changeThemeMode} from "@/Components/Services/theme";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import {faTv} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function DarkModeIconButton() {
    let themeMode: string;
    let setThemeMode: any;
    [themeMode, setThemeMode] = useState(localStorage.theme);

    const changeIconMode = () => {
        changeThemeMode();
        let theme = localStorage.theme;
        if(theme === "dark") {
            setThemeMode("dark");
        } else if (theme === "light") {
            setThemeMode('light');
        } else {
            setThemeMode(undefined);
        }
    }

    return (
        <FontAwesomeIcon className="text-primary-main text-xl cursor-pointer" icon={
            themeMode === "dark" ? faMoon :
            themeMode === "light" ? faSun : faTv
        } onClick={changeIconMode} />
    );
}
