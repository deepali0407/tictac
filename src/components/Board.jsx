import React from 'react'
import Squares from './Squares'
import "./styles/BoardStyle.scss"

const Board = () => {
    return (
    <div className="board">
        <div className="board-row">
            <Squares value= {0} />
            <Squares value= {1} />
            <Squares value= {2} />
        </div>
        <div className="board-row">
            <Squares value= {3} />
            <Squares value= {4} />
            <Squares value= {5} />
        </div>
        <div className="board-row">
            <Squares value= {6} />
            <Squares value= {7} />
            <Squares value= {8} />
        </div>
    </div>
    )
}

export default Board
