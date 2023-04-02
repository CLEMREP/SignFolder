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
        if(themeMode === "dark") {
            setThemeMode("light");
        } else if (themeMode === "light") {
            setThemeMode(undefined);
        } else {
            setThemeMode("dark");
        }
        changeThemeMode();
    }

    return (
        <FontAwesomeIcon className="text-primary-main text-xl cursor-pointer" icon={
            themeMode === "dark" ? faMoon :
            themeMode === "light" ? faSun : faTv
        } onClick={changeIconMode} />
    );
}
