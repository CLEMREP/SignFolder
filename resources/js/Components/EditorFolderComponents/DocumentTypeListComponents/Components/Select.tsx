import Icons from "@/Components/Icons";

export default function Select({ onClick }: { onClick: any}) {
    return (
        <div className="relative w-full">
            <div className="absolute w-full h-full z-10 bg-transparent cursor-pointer hover:bg-primary-main/10 rounded-xl transition-colors duration-150" onClick={onClick}></div>

            <select className="text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base w-full p-3 rounded-xl bg-transparent border-dashed border-2 border-background-light-neutral dark:border-background-dark-neutral focus:border-primary-main focus:dark:border-primary-main transition-colors duration-150 focus:ring-0">
                <option selected>Civilité</option>
            </select>
        </div>
    );
}
