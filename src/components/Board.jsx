import React, { useState } from "react";
import Squares from "./Squares";
import "./styles/BoardStyle.scss";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext,setIsXNext] = useState(true);
  console.log(board);

  //handles 
  const logicHandler = (position) => {
     if(board[position]){
       return ;
     }
     setBoard((prev) => {
       return prev.map((square,pos) => {
         if(pos === position){
           return isXNext ? 'X' : 'O';
         }
         return square ;
       })
     })
     setIsXNext(prev => !prev)    
  };

  const renderSquare = position => {
    //destructuring
    return (
      <Squares
        value={board[position]}
        onClick={() =>  logicHandler(position)}
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
