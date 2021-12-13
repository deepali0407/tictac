import React from "react";

const StatusMessage = ({winner, current}) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    //     const message = winner
    // ? `Winner is ${winner}`
    // : `Next Player is ${current.isXNext ? "X" : "O"}`;

    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !noMovesLeft &&  `Next Player is ${current.isXNext ? "X" : "O"}`}
      {!winner && noMovesLeft && "X and O tied"}
    </h2>
  );
};

export default StatusMessage;
