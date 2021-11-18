import React from 'react'
import "./styles/SquareStyle.scss"

const Squares = ({ value }) => {
    return (
         <button type="button" className="square">{value}</button>
    )
}

export default Squares;
