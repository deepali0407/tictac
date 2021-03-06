import React from "react";
import Squares from "./Squares";
import "./styles/BoardStyle.scss";
  //destructuring
const Board = ( {board,logicHandler,winningSquares} ) => {
  
  const renderSquare = position => {
    
    const isWinningSquare = winningSquares.includes(position);

    return (
      <Squares
        value={board[position]}
        onClick={() =>  logicHandler(position)}
        isWinningSquare = {isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
