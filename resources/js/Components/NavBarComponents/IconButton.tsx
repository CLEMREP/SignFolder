import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changeThemeMode} from "@/Components/Services/theme";

export default function IconButton({icon, notified}: { icon: any, notified: boolean }) {
    if(notified) {
        return (
            <div className="relative">
                <div className="absolute top-0.5 -right-0.5 w-2.5 h-2.5 bg-error-main rounded-full"></div>
                <FontAwesomeIcon className="text-primary-main text-xl" icon={icon} />
            </div>
        );
    } else {
        return (
            <FontAwesomeIcon className="text-primary-main text-xl" icon={icon} />
        );
    }
}
