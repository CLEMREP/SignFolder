import {useEffect, useState} from "react";
import Icons from "@/Components/Icons";
import {Link} from "@inertiajs/react";

export default function ProfilePicture() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            // @ts-ignore
            if (!e.target.closest('#profile-picture-burger-button')) {
                setIsVisible(false);
            } else {
                // @ts-ignore
                if(e.target.closest('#profile-picture-burger-button-owner')) {
                    setIsVisible(!isVisible);
                }
            }
        });
    })

    return (
        <div id="profile-picture-burger-button" className="relative w-full group">
            <div id="profile-picture-burger-button-owner" className="relative bg-text-light-disabled dark:bg-text-dark-disabled w-10 h-10 rounded-full drop-shadow-lg cursor-pointer" />
            <div className={`absolute flex flex-col ${isVisible ? 'visible' : 'invisible'} top-11 right-0 bg-background-light-paper dark:bg-background-dark-paper rounded-lg drop-shadow-lg`} >
                <Link method="post" href={route('logout')} as="button" className="flex flex-row justify-between items-center px-5 py-2 gap-10 hover:bg-primary-main/10 rounded-lg transition-colors duration-150 font-semibold text-sm text-text-light-primary dark:text-text-dark-primary cursor-pointer">
                    <p>Logout</p>
                    <Icons className="fill-text-light-primary dark:fill-text-dark-primary" iconName={"logout"} size={20} />
                </Link>
            </div>
        </div>
    );
}
