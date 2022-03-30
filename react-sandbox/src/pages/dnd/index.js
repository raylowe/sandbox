import React from 'react'
import Container from './Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function DragAndDrop() {

    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Container />
            </DndProvider>
        </div>
    )
}
export default DragAndDrop
