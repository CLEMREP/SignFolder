import Picture from "@/Components/SideBarComponents/OrganizationSelectComponents/Picture";
import Icons from "@/Components/Icons";

export default function OrganizationSelect() {
    return (
        <div className="flex flex-row gap-5 justify-center items-center cursor-pointer">
            <Picture />
            <div className="flex flex-col justify-center items-start">
                <h1 className="text-text-light-primary dark:text-text-dark-primary font-semibold">BNP Paribas</h1>
                <h1 className="text-text-light-disabled dark:text-text-dark-disabled text-sm font-semibold">Banque</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Icons className={"fill-text-light-primary dark:fill-text-dark-primary"} iconName={'chevronUp'} size={15} />
                <Icons className={"fill-text-light-primary dark:fill-text-dark-primary"} iconName={'chevronDown'} size={15} />
            </div>
        </div>
    );
}
