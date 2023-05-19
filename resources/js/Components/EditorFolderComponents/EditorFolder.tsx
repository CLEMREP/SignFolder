import StepList from "@/Components/EditorFolderComponents/StepListComponents/StepList";
import DocumentList from "@/Components/EditorFolderComponents/DocumentListComponents/DocumentList";
import DocumentTypeList from "@/Components/EditorFolderComponents/DocumentTypeListComponents/DocumentTypeList";
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function EditorFolder({onSave}: {onSave?: any}) {

    const defaultList = [
        {
            id: uuidv4(),
            name: 'Première étape',
            type: 0,
            documents: [
                {
                    id: uuidv4(),
                    name: 'Text',
                    type: 'text',
                }
            ]
        }
    ];

    const [itemList, setItemList] = useState(defaultList);

    const [stepSelected, setStepSelected] = useState(itemList[0].id);

    useEffect(() => {
        onSave(itemList);
    }, [itemList]);

    const addStep = () => {
        const newStep = {
            id: uuidv4(),
            name: 'Nouvelle étape',
            type: 0,
            documents: []
        };
        setItemList([newStep, ...itemList]);
    }

    const addDocument = (type: string) => {
        let name= '';
        switch (type) {
            case 'text':
                name = 'Text';
                break;
            case 'name':
                name = 'Nom';
                break;
            case 'email':
                name = 'Email';
                break;
            default:
                name = 'Text';
                break;
        }
        const newDocument = {
            id: uuidv4(),
            name: name,
            type: type,
        };
        setItemList(itemList.map(step => {
            if (step.id === stepSelected) {
                return {...step, documents: [...step.documents, newDocument]};
            }
            return step;
        }));
    }

    const deleteStep = (id: string) => {
        setItemList(itemList.filter(step => step.id !== id));
    }

    const deleteDocument = (id: string) => {
        setItemList(itemList.map(step => {
            if (step.id === stepSelected) {
                return {...step, documents: step.documents.filter(doc => doc.id !== id)};
            }
            return step;
        }));
    }

    const updateDocumentList = (id: string, updatedDocuments: any[]) => {
        setItemList(itemList.map(item => {
            if (item.id === id) {
                return {...item, documents: updatedDocuments};
            }
            return item;
        }));
    }

    return (
        <div className="flex flex-row justify-between items-start h-full overflow-auto">
            <StepList items={itemList} updateList={(items: any[]) => setItemList(items)} onClick={() => addStep()} onClickDelte={(id: string) => deleteStep(id)} stepSelected={stepSelected} onSelected={(selected: any) => setStepSelected(selected)} />
            {itemList.find(item => item.id === stepSelected)?.documents && (
                <DocumentList
                    items={itemList.find(item => item.id === stepSelected)?.documents || []}
                    updateList={(items: any[]) => updateDocumentList(stepSelected, items)}
                    onClickDelte={(id: string) => deleteDocument(id)}
                />
            )}
            <DocumentTypeList onClick={(type: string) => addDocument(type)} />
        </div>
    )
}
