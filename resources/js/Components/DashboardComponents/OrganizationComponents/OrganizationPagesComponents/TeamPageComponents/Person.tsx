import Icons from "@/Components/Icons";
import ProfileInformations
    from "@/Components/DashboardComponents/OrganizationComponents/OrganizationPagesComponents/TeamPageComponents/ProfileInformationsComponents/ProfileInformations";

export default function Person() {
    return (
        <div className="w-1/2 md:w-1/4 h-1/2 p-2">
            <div className="relative flex flex-col justify-center items-center w-full h-full rounded-xl bg-background-light-paper dark:bg-background-dark-paper drop-shadow-lg">
                <Icons className={"absolute top-2 right-2 fill-text-light-secondary dark:fill-text-dark-secondary w-1/12 text-right cursor-pointer"} iconName={'dotMenu'} size={30} />
                <ProfileInformations />
            </div>
        </div>
    );
}
