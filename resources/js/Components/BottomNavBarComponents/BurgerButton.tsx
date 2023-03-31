import {faBuilding, faFolder} from "@fortawesome/free-regular-svg-icons";
import Button from "@/Components/BottomNavBarComponents/Button";
import {faDashboard, faSliders} from "@fortawesome/free-solid-svg-icons";

export default function BurgerButton({routeName}: { routeName: string}) {
    return (
        <div className="fixed block md:hidden w-full bottom-0 p-5">
            <div className="flex flex-row gap-2 justify-around items-center w-full p-5 rounded-3xl bg-primary-main">
                <Button icon={faDashboard} text={"Tableau de bord"} selected={routeName == 'dashboard' ?? true} routeName={'dashboard'}  />
                <Button icon={faFolder} text={"Tableau de bord"} selected={routeName == 'folder' ?? true} routeName={'folder'}  />
                <Button icon={faBuilding} text={"Tableau de bord"} selected={routeName == 'organization' ?? true} routeName={'organization'}  />
                <Button icon={faSliders} text={"Tableau de bord"} selected={routeName == 'settings' ?? true} routeName={'settings'}  />
            </div>
        </div>
    );
}
