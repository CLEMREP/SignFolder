import ProfilePicture from "@/Components/DashboardComponents/NavBarComponents/ProfilePicture";
import {faBell, faMessage, faMoon} from "@fortawesome/free-regular-svg-icons";
import IconButton from "@/Components/DashboardComponents/NavBarComponents/IconButton";
import DarkModeIconButton from "@/Components/DashboardComponents/NavBarComponents/DarkModeIconButton";
import {Link} from "@inertiajs/react";



export default function NavBar({title}: { title: string}) {
    return (
        <div className="flex flex-row justify-between items-center text-gray-800 dark:text-gray-200 w-full">
            <h1 className="text-text-light-primary dark:text-text-dark-primary text-xl md:text-3xl font-bold">{title}</h1>
            <div className="flex flex-row gap-5 justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-3 text-primary-main text-xl">
                    <DarkModeIconButton />
                    <IconButton iconName={'comment'} notified={true} />
                    <IconButton iconName={'bell'} notified={true} />
                </div>
                <ProfilePicture/>
            </div>
        </div>
    );
}
