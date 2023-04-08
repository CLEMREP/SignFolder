import Icons from "@/Components/Icons";

export default function Select() {
    return (
        <select className="text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base w-1/3 p-3 rounded-xl bg-transparent border-2 border-background-light-neutral dark:border-background-dark-neutral focus:border-primary-main focus:dark:border-primary-main transition-colors duration-150 focus:ring-0">
            <option selected>Status</option>
        </select>
    );
}
