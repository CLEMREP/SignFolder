import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "@inertiajs/react";
import Icons from "@/Components/Icons";

export default function Button({iconName, text, selected, routeName}: { iconName: string, text: string, selected: boolean, routeName: string }) {
    return (
        <Link
            href={route(routeName)}
            className="flex flex-col justify-center items-center gap-2"
        >
            <Icons className={`${selected ? 'fill-text-dark-primary' : 'fill-text-dark-secondary'}`} iconName={iconName} />
            <div className={`w-1 h-1 rounded-full ${selected ? 'bg-text-dark-primary' : 'bg-transparent'}`}></div>
        </Link>
    );
}
