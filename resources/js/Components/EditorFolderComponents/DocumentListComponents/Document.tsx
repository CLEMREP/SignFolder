import {Link} from "@inertiajs/react";
import Icons from "@/Components/Icons";
import {useEffect, useState} from "react";

export default function Document({id, index, text, type, selected, onClick, onChange, onClickStepType, onClickDelete}: { id: string, index: number, text: string, type: number, selected: boolean, onClick: any, onChange: any, onClickStepType: any, onClickDelete: any }) {
    const [isTextWritten, setIsTextWritten] = useState(false);

    const [textState, setTextState] = useState(text);

    const [stepType, setStepType] = useState(type);

    const [isShowedStepType, setIsShowedStepType] = useState(false);

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

        document.addEventListener('click', (e) => {
            // @ts-ignore
            if (!e.target.closest(`#step-type-${id}`)) {
                setIsShowedStepType(false);
            } else {
                setIsShowedStepType(!isShowedStepType);
            }
        });
    })

    const changeText = (e: any) => {
        onChange(e);
        setTextState(e.target.value);
    }

    const changeStepType = (type: number) => {
        onClickStepType(type);
        setStepType(type);
    }

    return (
        <div id={`step-${id}`} className={`relative flex flex-row justify-start items-center w-full px-6 py-4 rounded-xl gap-5 font-semibold cursor-pointer drop-shadow-lg ${selected ? 'bg-primary-main text-text-dark-primary dark:text-text-dark-primary' : 'bg-background-light-paper dark:bg-background-dark-paper text-text-light-primary dark:text-text-dark-primary hover:bg-primary-main/30 hover:text-text-dark-primary group transition-colors duration-150'}`} onClick={onClick}>
            <p>{index}</p>
            {
                isTextWritten ?
                    <input id={`step-input-${id}`} type="text" className="w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0" defaultValue={textState} onChange={changeText} />
                    :
                    <p>{textState}</p>
            }
            <div className="absolute right-0 mx-2 flex flex-row justify-center items-center cursor-default gap-2">
                <div id={`step-type-${id}`} className="flex flex-row justify-center items-center cursor-default gap-2">
                    <Icons className={`${isShowedStepType ? 'block' : (stepType === 0 ? 'block' : 'hidden')} cursor-pointer ${selected ? 'fill-text-dark-primary dark:fill-text-dark-primary' : 'fill-text-light-primary dark:fill-text-dark-primary group-hover:fill-text-dark-primary transition-colors duration-150'}`} iconName={'documents'} size={30} onClick={() => changeStepType(0)} />
                    <Icons className={`${isShowedStepType ? 'block' : (stepType === 1 ? 'block' : 'hidden')} cursor-pointer ${selected ? 'fill-text-dark-primary dark:fill-text-dark-primary' : 'fill-text-light-primary dark:fill-text-dark-primary group-hover:fill-text-dark-primary transition-colors duration-150'}`} iconName={'sign'} size={30} onClick={() => changeStepType(1)} />
                    <Icons className={`${isShowedStepType ? 'block' : (stepType === 2 ? 'block' : 'hidden')} cursor-pointer ${selected ? 'fill-text-dark-primary dark:fill-text-dark-primary' : 'fill-text-light-primary dark:fill-text-dark-primary group-hover:fill-text-dark-primary transition-colors duration-150'}`} iconName={'payment'} size={30} onClick={() => changeStepType(2)} />
                </div>
                <Icons className={`cursor-pointer ${selected ? 'fill-text-dark-primary dark:fill-text-dark-primary' : 'fill-text-light-primary dark:fill-text-dark-primary group-hover:fill-text-dark-primary transition-colors duration-150'}`} iconName={'dotMenu'} size={15} onClick={onClickDelete} />
            </div>
        </div>
    );
}
