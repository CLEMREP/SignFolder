import {Link} from "@inertiajs/react";
import Icons from "@/Components/Icons";

export default function Step({iconName, text, selected, onClick}: { iconName: string, text: string, selected: boolean, onClick: any }) {
    return (
        <div className={`flex flex-row justify-start items-center w-full px-6 py-4 rounded-xl gap-5 font-semibold cursor-pointer ${selected ? 'bg-primary-main text-text-dark-primary dark:text-text-dark-primary drop-shadow-lg' : 'text-text-light-primary dark:text-text-dark-primary border-2 border-background-light-neutral dark:border-background-dark-neutral hover:bg-primary-main/30 hover:text-text-dark-primary group transition-colors duration-150'}`} onClick={onClick}>
            <Icons className={`${selected ? 'fill-text-dark-primary dark:fill-text-dark-primary' : 'fill-text-light-primary dark:fill-text-dark-primary group-hover:fill-text-dark-primary transition-colors duration-150'}`} iconName={iconName} size={30} />
            <p>{text}</p>
        </div>
    );
}
