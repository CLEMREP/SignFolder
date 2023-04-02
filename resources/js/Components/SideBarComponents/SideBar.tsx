import {faBuilding, faFolder} from "@fortawesome/free-regular-svg-icons";
import Button from "@/Components/SideBarComponents/Button";
import {faDashboard, faSliders} from "@fortawesome/free-solid-svg-icons";
import OrganizationSelect from "@/Components/SideBarComponents/OrganizationSelectComponents/OrganizationSelect";
import ProfileInformations from "@/Components/SideBarComponents/ProfileInformationsComponents/ProfileInformations";

export default function SideBar({routeName}: { routeName: string}) {
    return (
        <div className="hidden md:flex flex-col justify-between items-center w-1/4 h-full w-96 px-5 py-20 border-r-2 border-background-light-neutral dark:border-background-dark-neutral">
            <ProfileInformations />
            <div className="flex flex-col gap-2 justify-center items-center w-full">
                <Button iconName={'dashboard'} text={"Tableau de bord"} selected={routeName == 'dashboard' ?? true} routeName={'dashboard'}  />
                <Button iconName={'folder'} text={"Dossiers"} selected={routeName == 'dashboard_folder' ?? true} routeName={'dashboard_folder'} />
                <Button iconName={'organization'} text={"Organisation"} selected={routeName == 'dashboard_organization' ?? true} routeName={'dashboard_organization'} />
                <Button iconName={'settings'} text={"Paramètres"} selected={routeName == 'dashboard_settings' ?? true} routeName={'dashboard_settings'} />
            </div>
            <OrganizationSelect />
        </div>
    );
}
