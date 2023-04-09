import Step from "@/Components/EditorFolderComponents/Step";
import {useState} from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import NewStep from "@/Components/EditorFolderComponents/AddStep";
import AddStep from "@/Components/EditorFolderComponents/AddStep";

export default function StepList() {
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
        <div className="flex flex-col justify-start items-start w-1/3 h-full gap-2 border-r-2 border-background-light-neutral dark:border-background-dark-neutral">
            <div className="px-5 pt-5 w-full">
                <AddStep onClick={() => addStep()} />
            </div>
            <DragDropContext onDragEnd={handleDrop}>
                <Droppable droppableId="flex flex-col justify-start items-start w-full h-full gap-2 overflow-auto px-5 py-5">
                    {(provided) => (
                        <div
                            className="flex flex-col justify-start items-start w-full h-full gap-2 overflow-auto px-5 py-5"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {itemList.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        console.log(provided.dragHandleProps?.draggable),
                                        <div
                                            className="flex flex-row justify-start items-start w-full"
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                        >
                                            <Step id={item.id} index={index+1} text={item.name} type={item.type} selected={item.id === selected} onClick={() => setSelected(item.id)} onChange={(e: any) => item.name = e.target.value} onClickStepType={(type: number) => item.type = type} onClickDelete={() => deleteStep(item.id)} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
