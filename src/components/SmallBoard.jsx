import React, { useState } from "react";
import styles from "./SmallBoard.module.css"

function SmallBoard() {
  const initialBoard = Array(9).fill("Q");
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (index) => {
    if (board[index] !== "Q") {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div className={styles.board}>
      {board.map((cell, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {cell}
        </button>
      ))}
    </div>
  );
}

export default SmallBoard;
