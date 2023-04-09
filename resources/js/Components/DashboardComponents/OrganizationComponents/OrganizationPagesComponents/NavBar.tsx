import {useEffect, useState} from "react";
import Icons from "@/Components/Icons";

export default function NavBar({pageSelected}: { pageSelected: any }) {
    const [page, setPage] = useState(0);

    const changePage = (page: number) => {
        pageSelected(page);
        setPage(page);
    }

    return (
        <div className="relative flex flex-row justify-start items-center w-full gap-10">
            <div className="relative group cursor-pointer">
                <div className="flex flex-row justify-center items-center gap-3" onClick={() => changePage(0)}>
                    <Icons className="fill-text-light-primary dark:fill-text-dark-primary" iconName={'team'} size={25} />
                    <h3 className="text-text-light-primary dark:text-text-dark-primary text-base md:text-base font-semibold">Team</h3>
                </div>
                <div className={`absolute z-20 top-9 ${page === 0 ? 'w-full' : 'w-0'} group-hover:w-full h-1 bg-primary-main rounded-full transition-all duration-150`}></div>
            </div>

            <div className="relative group cursor-pointer">
                <div className="flex flex-row justify-center items-center gap-3" onClick={() => changePage(1)}>
                    <Icons className="fill-text-light-primary dark:fill-text-dark-primary" iconName={'settings'} size={25} />
                    <h3 className="text-text-light-primary dark:text-text-dark-primary text-base md:text-base font-semibold">Paramètres</h3>
                </div>
                <div className={`absolute z-20 top-9 ${page === 1 ? 'w-full' : 'w-0'} group-hover:w-full h-1 bg-primary-main rounded-full transition-all duration-150`}></div>
            </div>
            <div className="absolute z-10 top-9 w-full h-0.5 bg-background-light-neutral dark:bg-background-dark-neutral rounded-full"></div>
        </div>
    );
}
