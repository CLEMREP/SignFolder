import Icons from "@/Components/Icons";
import {useEffect, useState} from "react";

export default function Select({ id, onClickDelete }: { id: string, onClickDelete: any }) {
    const [isTextWritten, setIsTextWritten] = useState(false);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            // @ts-ignore
            if (!e.target.closest(`#document-${id}`)) {
                setIsTextWritten(false);
            }
        });
        document.addEventListener('dblclick', (e) => {
            // @ts-ignore
            if (e.target.closest(`#document-${id}`)) {
                setIsTextWritten(true);
                // @ts-ignore
                document.querySelector(`#document-input-${id}`).focus();
            }
        });
    })

    return (
        <div className="relative w-full cursor-default">
            {
                isTextWritten ?
                    <></>
                    :
                    <div id={`document-${id}`} className="absolute w-full h-full z-10 bg-transparent"></div>
            }

            <select id={`document-input-${id}`} className="relative text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base w-full p-3 pr-12 rounded-xl bg-transparent border-2 border-background-light-neutral dark:border-background-dark-neutral focus:border-primary-main focus:dark:border-primary-main transition-colors duration-150 focus:ring-0">
                <option selected>Civilité</option>
            </select>
            <Icons className={"absolute inset-y-0 right-0 my-auto w-12 fill-text-light-disabled dark:fill-text-dark-disabled z-10 cursor-pointer"} iconName={'dotMenu'} size={20} onClick={onClickDelete} />
        </div>
    );
}
