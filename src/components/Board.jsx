import React from 'react'
import Squares from './Squares'

const Board = () => {
    return (
    <div>
        <div>
            <Squares value= {0} />
            <Squares value= {1} />
            <Squares value= {2} />
        </div>
        <div>
            <Squares value= {3} />
            <Squares value= {4} />
            <Squares value= {5} />
        </div>
        <div>
            <Squares value= {6} />
            <Squares value= {7} />
            <Squares value= {8} />
        </div>
    </div>
    )
}

export default Board
