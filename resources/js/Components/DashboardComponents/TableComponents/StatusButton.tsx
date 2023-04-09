import {Link} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function StatusButton({status}: { status: number }) {
    switch (status) {
        case 0:
            return (
                <div className="w-fit bg-success-main/10 text-success-dark font-semibold rounded-lg px-3 py-1">
                    Validé
                </div>
            );
        case 1:
            return (
                <div className="w-fit bg-warning-main/10 text-warning-dark font-semibold rounded-lg px-3 py-1">
                    En cours
                </div>
            );
        case 2:
            return (
                <div className="w-fit bg-error-main/10 text-error-dark font-semibold rounded-lg px-3 py-1">
                    Ouvert
                </div>
            );
        default:
            return (
                <div className="font-semibold rounded-lg px-3 py-1">
                    Null
                </div>
            );
    }
}
