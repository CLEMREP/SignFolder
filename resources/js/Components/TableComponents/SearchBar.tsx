import Icons from "@/Components/Icons";

export default function SearchBar() {
    return (
        <div className="flex flex-row justify-start items-center w-full rounded-xl bg-background-light-paper dark:bg-background-dark-paper border-2 border-background-light-neutral dark:border-background-dark-neutral p-3 gap-2">
            <Icons className={"fill-text-light-disabled dark:fill-text-dark-disabled"} iconName={'search'} />
            <input className="text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base placeholder:text-text-light-disabled placeholder:dark:text-text-dark-disabled placeholder:text-sm placeholder:md:text-base w-full p-0 bg-transparent border-none focus:border-none" type="search" placeholder="Rechercher un dossier..." />
        </div>
    );
}
