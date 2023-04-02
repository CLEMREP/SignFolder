import StatusButton from "@/Components/TableComponents/StatusButton";
import Icons from "@/Components/Icons";

export default function Row() {
    return (
        <div className="flex flex-row justify-center items-center w-full p-5 hover:bg-background-light-neutral hover:dark:bg-background-dark-neutral transition-colors duration-150">
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left cursor-pointer">N°ACD65GF</span>
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left">08 Apr 2022</span>
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left">3/4</span>
            <div className="text-text-light-secondary dark:text-text-dark-secondary w-full">
                <StatusButton status={0} />
            </div>
            <Icons className={"fill-text-light-secondary dark:fill-text-dark-secondary w-1/12 text-right cursor-pointer"} iconName={'dotMenu'} />
        </div>
    );
}
