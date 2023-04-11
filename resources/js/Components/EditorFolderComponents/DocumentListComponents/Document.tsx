import {useEffect, useState} from "react";
import TextInput from "@/Components/EditorFolderComponents/DocumentListComponents/Components/TextInput";
import Select from "@/Components/EditorFolderComponents/DocumentListComponents/Components/Select";

export default function Document({id, index, text, type, selected, onClick, onChange, onClickStepType, onClickDelete}: { id: string, index: number, text: string, type: string, selected: boolean, onClick: any, onChange: any, onClickStepType: any, onClickDelete: any }) {
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

    const changeStepType = (type: string) => {
        onClickStepType(type);
        setStepType(type);
    }

    switch (type) {
        case 'text':
            return (
                <TextInput id={id} logo={'comment'} placeholder={textState} onClickDelete={onClickDelete} onChange={changeText} />
            );
        case 'name':
            return (
                <TextInput id={id} logo={'name'} placeholder={textState} onClickDelete={onClickDelete} onChange={changeText} />
            );
        case 'email':
            return (
                <TextInput id={id} logo={'email'} placeholder={textState} onClickDelete={onClickDelete} onChange={changeText} />
            );
        case 'select':
            return (
                <Select id={id} onClickDelete={onClickDelete} />
            );
        default:
            return (
                <TextInput id={id} logo={'search'} placeholder={textState} onClickDelete={onClickDelete} onChange={changeText} />
            );
    }
}
