import ProfilePicture from "@/Components/SideBarComponents/ProfilePicture";
import {faBell, faBuilding, faFolder, faMessage, faMoon} from "@fortawesome/free-regular-svg-icons";
import Button from "@/Components/SideBarComponents/Button";
import OrganisationPicture from "@/Components/SideBarComponents/OrganisationPicture";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp, faDashboard, faSliders} from "@fortawesome/free-solid-svg-icons";
import {Link} from "@inertiajs/react";

export default function SideBar({routeName}: { routeName: string}) {
    return (
        <div className="flex flex-col justify-between items-center w-1/4 h-full px-5 py-20 border-r-2 border-background-light-neutral dark:border-background-dark-neutral">
            <div className="flex flex-col gap-5 justify-center items-center">
                <ProfilePicture />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-text-light-primary dark:text-text-dark-primary font-semibold">Prénom NOM</h1>
                    <h1 className="text-text-light-disabled dark:text-text-dark-disabled text-sm font-semibold">User</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full">
                <Button icon={faDashboard} text={"Tableau de bord"} selected={routeName == 'dashboard' ?? true} routeName={'dashboard'}  />
                <Button icon={faFolder} text={"Dossiers"} selected={routeName == 'folder' ?? true} routeName={'folder'} />
                <Button icon={faBuilding} text={"Organisation"} selected={routeName == 'organization' ?? true} routeName={'organization'} />
                <Button icon={faSliders} text={"Paramètres"} selected={routeName == 'settings' ?? true} routeName={'settings'} />
            </div>
            <div className="flex flex-row gap-5 justify-center items-center">
                <OrganisationPicture />
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-text-light-primary dark:text-text-dark-primary font-semibold">BNP Paribas</h1>
                    <h1 className="text-text-light-disabled dark:text-text-dark-disabled text-sm font-semibold">Banque</h1>
                </div>
                <div className="flex flex-col justify-center items-center text-text-light-primary dark:text-text-dark-primary text-sm">
                    <FontAwesomeIcon icon={faChevronUp} />
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </div>
    );
}
