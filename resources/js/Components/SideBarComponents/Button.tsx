import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "@inertiajs/react";

export default function Button({icon, text, selected, routeName}: { icon: any, text: string, selected: boolean, routeName: string }) {
    return (
        <Link
            href={route(routeName)}
            className={`flex flex-row justify-start items-center w-full px-6 py-4 rounded-xl gap-5 font-semibold ${selected ? 'bg-primary-main text-text-dark-primary dark:text-text-dark-primary' : 'text-text-light-primary dark:text-text-dark-primary'}`}
        >
            <FontAwesomeIcon className="text-xl" icon={icon} />
            <p>{text}</p>
        </Link>
    );
}
