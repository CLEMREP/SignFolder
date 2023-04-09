import {useState} from "react";

export default function NavBar({pageSelected}: { pageSelected: any }) {
    const [page, setPage] = useState(0);

    const changePage = (page: number) => {
        pageSelected(page);
        setPage(page);
    }

    return (
        <div className="relative flex flex-row justify-start items-center w-full gap-10">
            <div className="relative group cursor-pointer">
                <h3 className="text-text-light-primary dark:text-text-dark-primary text-lg md:text-lg font-semibold" onClick={() => changePage(0)}>Team</h3>
                <div className={`absolute z-20 top-9 ${page === 0 ? 'w-full' : 'w-0'} group-hover:w-full h-1 bg-primary-main rounded-full transition-all duration-150`}></div>
            </div>
            <div className="relative group cursor-pointer">
                <h3 className="text-text-light-primary dark:text-text-dark-primary text-lg md:text-lg font-semibold" onClick={() => changePage(1)}>Paramètres</h3>
                <div className={`absolute z-20 top-9 ${page === 1 ? 'w-full' : 'w-0'} group-hover:w-full h-1 bg-primary-main rounded-full transition-all duration-150`}></div>
            </div>
            <div className="absolute z-10 top-9 w-full h-0.5 bg-background-light-neutral dark:bg-background-dark-neutral rounded-full"></div>
        </div>
    );
}
