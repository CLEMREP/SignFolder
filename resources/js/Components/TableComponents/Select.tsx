import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import Icons from "@/Components/Icons";

export default function Select() {
    return (
        <div className="flex flex-row justify-between items-center w-1/3 rounded-xl bg-background-light-paper dark:bg-background-dark-paper border-2 border-background-light-neutral dark:border-background-dark-neutral p-3">
            <span className="text-text-light-disabled dark:text-text-dark-disabled">Status</span>
            <Icons className={"fill-text-light-disabled dark:fill-text-dark-disabled"} iconName={'chevronDown'} />
        </div>
    );
}
