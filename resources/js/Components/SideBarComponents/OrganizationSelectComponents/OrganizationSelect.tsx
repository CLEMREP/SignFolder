import Picture from "@/Components/SideBarComponents/OrganizationSelectComponents/Picture";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

export default function OrganizationSelect() {
    return (
        <div className="flex flex-row gap-5 justify-center items-center">
            <Picture />
            <div className="flex flex-col justify-center items-start">
                <h1 className="text-text-light-primary dark:text-text-dark-primary font-semibold">BNP Paribas</h1>
                <h1 className="text-text-light-disabled dark:text-text-dark-disabled text-sm font-semibold">Banque</h1>
            </div>
            <div className="flex flex-col justify-center items-center text-text-light-primary dark:text-text-dark-primary text-sm">
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    );
}
