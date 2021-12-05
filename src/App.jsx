import React , { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext,setIsXNext] = useState(true);
  
  const winner = calculateWinner(board);
  const message = winner? `Winner is ${winner}` : `Next Player is ${isXNext? 'X':'O'}`
  console.log(board);

  //handles 
  const logicHandler = (position) => {
     if(board[position] || winner){
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

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h2>{message}</h2>
      <Board board={board} logicHandler={logicHandler} />
    </div>
  );
}
export default App;
