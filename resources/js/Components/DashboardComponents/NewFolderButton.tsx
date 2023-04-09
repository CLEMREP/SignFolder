import {Link} from "@inertiajs/react";

export default function NewFolderButton({routeName}: { routeName: string }) {
    return (
        <Link
            href={route(routeName)}
            className="bg-primary-main text-text-light-primary dark:text-text-dark-primary text-sm font-bold px-5 py-2 rounded-xl cursor-pointer"
        >
            <p>Nouveau dossier</p>
        </Link>
    );
}
