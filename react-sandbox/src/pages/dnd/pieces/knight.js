import styled from "styled-components";
import { ItemTypes } from "./Constants";
import { useDrag } from 'react-dnd'

const StyledKnight = styled.div`
    font-size: 3rem;
`

function Knight() {

    //Make the knight draggable:
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <StyledKnight>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    cursor: 'move',
                }}
            >
                ♘
            </div>
        </StyledKnight>

    )
}
export default Knight