import StepList from "@/Components/EditorFolderComponents/StepListComponents/StepList";
import DocumentList from "@/Components/EditorFolderComponents/DocumentListComponents/DocumentList";
import DocumentTypeList from "@/Components/EditorFolderComponents/DocumentTypeListComponents/DocumentTypeList";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function EditorFolder() {
    const [stepSelected, setStepSelected] = useState('');

    const selectStep = (id: string) => {
        setStepSelected(id);
    }

    const defaultList = [
        {
            id: '0',
            name: 'A',
            type: 'text',
        },
        {
            id: '1',
            name: 'B',
            type: 'select',
        },
        {
            id: '2',
            name: 'C',
            type: 'email',
        }
    ];

    const [itemList, setItemList] = useState(defaultList);

    const addDocument = (type: string) => {
        //setItemList([...itemList, {id: itemList.length.toString(), name: 'D', type: type}]);
        setItemList([...itemList, {id: uuidv4(), name: 'D', type: type}]);
    }

    const deleteDocument = (id: string) => {
        setItemList(itemList.filter(item => item.id !== id));
    }

    return (
        <div className="flex flex-row justify-between items-start h-full overflow-auto">
            <StepList stepSelected={stepSelected} onSelectStep={(id: string) => selectStep(id)} />
            <DocumentList items={itemList} updateList={(items: any[]) => setItemList(items)} onClickDelte={(id: string) => deleteDocument(id)} />
            <DocumentTypeList onClick={(type: string) => addDocument(type)} />
        </div>
    )
}
