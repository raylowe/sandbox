import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect, useState } from "react";

//pieces
import Board from './pieces/board'
import { gameService } from './pieces/game'

function DragAndDrop() {

    const root = document.getElementById('root')
    gameService.observe((knightPosition) =>
        ReactDOM.render(<Board knightPosition={knightPosition} />, root)
    )

}
export default DragAndDrop