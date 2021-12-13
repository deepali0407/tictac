import React from "react";
import "./styles/SquareStyle.scss";

const Squares = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={() => {
        onClick();
      }}
      style={{fontWeight : isWinningSquare ? 'bold' : 'normal'}  }

    >
      {value}
    </button>
  );
};

export default Squares;
