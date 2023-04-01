import Select from "@/Components/TableComponents/Select";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Header from "@/Components/TableComponents/Header";
import BodyRow from "@/Components/TableComponents/BodyRow";
import SearchBar from "@/Components/TableComponents/SearchBar";

export default function Table() {
    return (
        <div className="flex flex-col justify-start items-start w-full h-full rounded-xl bg-background-light-paper dark:bg-background-dark-paper">
            <div className="flex flex-row justify-center items-center w-full p-5 gap-5">
                <Select />
                <SearchBar />
            </div>
            <div className="flex flex-col justify-start items-center w-full h-full">
                <Header />
                <BodyRow />
                <BodyRow />
                <BodyRow />
                <BodyRow />
                <BodyRow />
            </div>
            <div className="flex flex-row justify-end items-center w-full p-5 gap-5 border-t-2 border-background-light-neutral dark:border-background-dark-neutral">
                <span className="text-text-light-disabled dark:text-text-dark-secondary">1/5</span>
                <FontAwesomeIcon className="text-text-light-disabled dark:text-text-dark-disabled text-sm" icon={faChevronLeft} />
                <FontAwesomeIcon className="text-text-light-disabled dark:text-text-dark-secondary text-sm" icon={faChevronRight} />
            </div>
        </div>
    );
}
