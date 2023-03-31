import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "@inertiajs/react";

export default function Button({icon, text, selected, routeName}: { icon: any, text: string, selected: boolean, routeName: string }) {
    return (
        <Link
            href={route(routeName)}
            className="flex flex-col justify-center items-center gap-2"
        >
            <FontAwesomeIcon className={`text-2xl font-semibold ${selected ? 'text-text-dark-primary' : 'text-text-dark-secondary'}`} icon={icon} />
            <div className={`w-1 h-1 rounded-full ${selected ? 'bg-text-dark-primary' : 'bg-transparent'}`}></div>
        </Link>
    );
}
