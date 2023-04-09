import {Link} from "@inertiajs/react";
import Icons from "@/Components/Icons";
import {useEffect, useState} from "react";

export default function Step({id, iconName, text, selected, onClick, onChange}: { id: string, iconName: string, text: string, selected: boolean, onClick: any, onChange: any }) {
    const [isTextWritten, setIsTextWritten] = useState(false);

    const [textState, setTextState] = useState(text);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            // @ts-ignore
            if (!e.target.closest(`#step-${id}`)) {
                setIsTextWritten(false);
            }
        });

        document.addEventListener('dblclick', (e) => {
            // @ts-ignore
            if (e.target.closest(`#step-${id}`)) {
                setIsTextWritten(true);
                // @ts-ignore
                document.querySelector(`#step-input-${id}`).focus();
            }
        });
    })

    const changeText = (e: any) => {
        onChange(e);
        setTextState(e.target.value);
    }

    return (
        <div id={`step-${id}`} className={`flex flex-row justify-start items-center w-full px-6 py-4 rounded-xl gap-5 font-semibold cursor-pointer drop-shadow-lg ${selected ? 'bg-primary-main text-text-dark-primary dark:text-text-dark-primary' : 'bg-background-light-paper dark:bg-background-dark-paper text-text-light-primary dark:text-text-dark-primary hover:bg-primary-main/30 hover:text-text-dark-primary group transition-colors duration-150'}`} onClick={onClick}>
            <Icons className={`${selected ? 'fill-text-dark-primary dark:fill-text-dark-primary' : 'fill-text-light-primary dark:fill-text-dark-primary group-hover:fill-text-dark-primary transition-colors duration-150'}`} iconName={iconName} size={30} />
            {
                isTextWritten ?
                    <input id={`step-input-${id}`} type="text" className="w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0" defaultValue={textState} onChange={changeText} />
                    :
                    <p>{textState}</p>
            }
        </div>
    );
}
