import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import StatusButton from "@/Components/TableComponents/StatusButton";

export default function Row() {
    return (
        <div className="flex flex-row justify-center items-center w-full p-5">
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left">N°ACD65GF</span>
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left">08 Apr 2022</span>
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left">3/4</span>
            <div className="text-text-light-secondary dark:text-text-dark-secondary w-full">
                <StatusButton status={0} />
            </div>
            <FontAwesomeIcon className="text-text-light-secondary dark:text-text-dark-secondary w-1/12 text-right" icon={faEllipsisV} />
        </div>
    );
}
