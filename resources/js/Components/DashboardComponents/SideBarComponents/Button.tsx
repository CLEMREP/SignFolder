import {Link} from "@inertiajs/react";
import Icons from "@/Components/Icons";

export default function Button({iconName, text, selected, routeName}: { iconName: string, text: string, selected: boolean, routeName: string }) {
    return (
        <Link
            href={route(routeName)}
            className={`flex flex-row justify-start items-center w-full px-6 py-4 rounded-xl gap-5 font-semibold drop-shadow-lg ${selected ? 'bg-primary-main text-text-dark-primary dark:text-text-dark-primary' : 'text-text-light-primary dark:text-text-dark-primary hover:bg-primary-main/30 hover:text-text-dark-primary group transition-colors duration-150'}`}
        >
            <Icons className={`${selected ? 'fill-text-dark-primary dark:fill-text-dark-primary' : 'fill-text-light-primary dark:fill-text-dark-primary group-hover:fill-text-dark-primary transition-colors duration-150'}`} iconName={iconName} size={30} />
            <p>{text}</p>
        </Link>
    );
}
