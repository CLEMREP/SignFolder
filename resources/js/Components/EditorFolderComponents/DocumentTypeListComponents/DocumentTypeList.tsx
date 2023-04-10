import Step from "@/Components/EditorFolderComponents/StepListComponents/Step";
import {useState} from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import NewStep from "@/Components/EditorFolderComponents/StepListComponents/AddStep";
import AddStep from "@/Components/EditorFolderComponents/StepListComponents/AddStep";
import DocumentType from "@/Components/EditorFolderComponents/DocumentTypeListComponents/DocumentType";
import SearchBar from "@/Components/EditorFolderComponents/DocumentTypeListComponents/SearchBar";

export default function DocumentTypeList({ onClick }: {onClick: any}) {
    const defaultList = [
        {
            id: '0',
            name: 'A',
            type: 0,
        },
        {
            id: '1',
            name: 'B',
            type: 1,
        },
        {
            id: '2',
            name: 'C',
            type: 2,
        },
    ];

    const [itemList, setItemList] = useState(defaultList);

    // Function to update list on drop
    // @ts-ignore
    const handleDrop = (droppedItem) => {
        // Ignore drop outside droppable container
        if (!droppedItem.destination) return;
        var updatedList = [...itemList];
        // Remove dragged item
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        // Add dropped item
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        // Update State
        setItemList(updatedList);
    };

    const [selected, setSelected] = useState('0');

    const addStep = () => {
        //setItemList([...itemList, {id: itemList.length.toString(), name: 'D', , type: 0}]);
        setItemList([{id: itemList.length.toString(), name: 'Nouvelle étape', type: 0}, ...itemList]);
        setSelected(itemList.length.toString());
    }

    const deleteStep = (id: string) => {
        setItemList(itemList.filter(item => item.id !== id));
    }

    return (
        <div className="flex flex-col justify-start items-start w-1/4 h-full gap-2 border-l-2 border-background-light-neutral dark:border-background-dark-neutral p-2">
            <div className="flex flex-col justify-start items-start w-full h-full gap-7 px-5 py-5 bg-background-light-paper dark:bg-background-dark-paper rounded-xl drop-shadow-lg overflow-auto">
                <div className="flex flex-col justify-center items-start w-full gap-3">
                    <h3 className="text-text-light-primary dark:text-text-dark-primary text-lg font-bold">Type de documents</h3>
                    <SearchBar />
                </div>

                <div className="flex flex-col justify-center items-center w-full gap-5">
                    <div className="flex flex-col justify-center items-start w-full gap-3">
                        <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-bold">Text :</p>
                        <div className="flex flex-col justify-center items-start w-full gap-2">
                            <DocumentType type={'text'} onClick={((type: string) => onClick(type))} />
                            <DocumentType type={'name'} onClick={((type: string) => onClick(type))} />
                            <DocumentType type={'email'} onClick={((type: string) => onClick(type))} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-3">
                        <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-bold">Select :</p>
                        <div className="flex flex-col justify-center items-start w-full gap-2">
                            <DocumentType type={'select'} onClick={((type: string) => onClick(type))} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-3">
                        <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-bold">Radio bouton :</p>
                        <div className="flex flex-col justify-center items-start w-full gap-2">
                            <DocumentType type={'select'} onClick={((type: string) => onClick(type))} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-3">
                        <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-bold">Checkbox :</p>
                        <div className="flex flex-col justify-center items-start w-full gap-2">
                            <DocumentType type={'select'} onClick={((type: string) => onClick(type))} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
