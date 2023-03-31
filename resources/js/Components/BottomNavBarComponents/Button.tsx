import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "@inertiajs/react";

export default function Button({icon, text, selected, routeName}: { icon: any, text: string, selected: boolean, routeName: string }) {
    return (
        <Link
            href={route(routeName)}
            className={`font-semibold text-text-dark-primary`}
        >
            <FontAwesomeIcon className="text-3xl" icon={icon} />
        </Link>
    );
}
