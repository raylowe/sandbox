import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import styled from "styled-components";

const DndCanvasStyled = styled.div`
    background-color: #aaaaaa;
`

const DropContainerStyled = styled.div`
    padding:15px;
`


const elements = [
    { id: "one", content: "one" },
    { id: "two", content: "two" },
    { id: "three", content: "three" },
    { id: "four", content: "four" }
];

function AtlassianDragAndDrop() {
    const [items, setItems] = useState(elements);

    const onDragEnd = (result) => {
        const newItems = Array.from(items);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setItems(newItems);
    };

    return (
        <DndCanvasStyled>
            <DragDropContext onDragEnd={onDragEnd}>
                <DropContainerStyled>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <ListItem
                                                provided={provided}
                                                snapshot={snapshot}
                                                item={item}
                                            />
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DropContainerStyled>
            </DragDropContext>
        </DndCanvasStyled>
    );

}
export default AtlassianDragAndDrop