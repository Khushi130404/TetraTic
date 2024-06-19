import React, { useState } from "react";

function SmallBoard() {
  const initialBoard = Array.fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (index) => {
    if (board[index] != null) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    setBoard = newBoard;
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    return (
      <div>
        {board.map((cell, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
    );
  };
}

export default SmallBoard;
