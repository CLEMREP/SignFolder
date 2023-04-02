import Icons from "@/Components/Icons";

export default function SearchBar() {
    return (
        <div className="flex flex-row justify-start items-center w-full rounded-xl bg-background-light-paper dark:bg-background-dark-paper border-2 border-background-light-neutral dark:border-background-dark-neutral p-3 gap-2">
            <Icons className={"fill-text-light-disabled dark:fill-text-dark-disabled"} iconName={'search'} />
            <span className="text-text-light-disabled dark:text-text-dark-disabled">Rechercher un dossier...</span>
        </div>
    );
}
