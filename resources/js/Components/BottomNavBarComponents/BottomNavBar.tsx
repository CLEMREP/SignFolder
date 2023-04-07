import Button from "@/Components/BottomNavBarComponents/Button";

export default function BottomNavBar({routeName}: { routeName: string}) {
    return (
        <div className="fixed block md:hidden w-full bottom-0 p-5">
            <div className="flex flex-row gap-2 justify-around items-center w-full p-2 rounded-2xl bg-primary-main">
                <Button iconName={'dashboard'} text={"Tableau de bord"} selected={routeName == 'dashboard' ?? true} routeName={'dashboard'}  />
                <Button iconName={'folder'} text={"Tableau de bord"} selected={routeName == 'dashboard_folder' ?? true} routeName={'dashboard_folder'}  />
                <Button iconName={'organization'} text={"Tableau de bord"} selected={routeName == 'dashboard_organization' ?? true} routeName={'dashboard_organization'}  />
                <Button iconName={'settings'} text={"Tableau de bord"} selected={routeName == 'dashboard_settings' ?? true} routeName={'dashboard_settings'}  />
            </div>
        </div>
    );
}
