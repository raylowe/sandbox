import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";
import styled from "styled-components";

const CardHeader = styled.div`
  font-weight: 500;
  text-align: start;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 10px;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

const ListItem = ({ item, provided, snapshot }) => {
  const randomHeader = useMemo(() => "HEADER TEXT", []);

  return (
    <DragItem
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <CardHeader>{randomHeader}</CardHeader>
      <span>{item.id}</span>
      <CardFooter>
        <span>{item.content}</span>
        <Author>
          {item.id}
        </Author>
      </CardFooter>
    </DragItem>
  );
};

export default ListItem;
