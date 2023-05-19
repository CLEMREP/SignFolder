import {changeThemeMode} from "@/Components/Services/theme";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import {faTv} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Icons from "@/Components/Icons";

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
        <Icons className="fill-primary-main cursor-pointer" iconName={
            themeMode === "dark" ? 'moon' :
                themeMode === "light" ? 'bright' : 'system'
        } size={30} onClick={changeIconMode} />
    );
}
