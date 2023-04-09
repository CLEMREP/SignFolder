import Step from "@/Components/EditorFolderComponents/Step";
import {useState} from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import NewStep from "@/Components/EditorFolderComponents/AddStep";
import AddStep from "@/Components/EditorFolderComponents/AddStep";

export default function StepList() {
    const defaultList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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

    const [selected, setSelected] = useState('A');

    return (
        <div className="flex flex-col justify-start items-start w-1/3 h-full gap-2 px-5 py-5 border-r-2 border-background-light-neutral dark:border-background-dark-neutral">
            <AddStep onClick={() => alert('ok')} />
            <DragDropContext onDragEnd={handleDrop}>
                <Droppable droppableId="flex flex-col justify-start items-start w-full h-full gap-2 overflow-auto">
                    {(provided) => (
                        <div
                            className="flex flex-col justify-start items-start w-full h-full gap-2 overflow-auto"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {itemList.map((item, index) => (
                                <Draggable key={item} draggableId={item} index={index}>
                                    {(provided) => (
                                        console.log(provided.dragHandleProps?.draggable),
                                        <div
                                            className="flex flex-row justify-start items-start w-full"
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                        >
                                            <Step iconName={'folder'} text={`Etape ${item}`} selected={item === selected} onClick={() => setSelected(item)} />
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
