import React, { useState } from "react";
import "./styles/SquareStyle.scss";

const Squares = ({ value, onClick }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
};

export default Squares;
