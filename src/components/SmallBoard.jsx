import React, { useState, useRef } from "react";
import styles from "./SmallBoard.module.css";

function SmallBoard() {
  const initialBoard = [
    ["Q", "Q", "Q"],
    ["Q", "Q", "Q"],
    ["Q", "Q", "Q"],
  ];
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const boardRef = useRef(null);
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (board[row][col] !== "Q") {
      return;
    }

    const newBoard = board.slice();
    newBoard[row] = board[row].slice();
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (checkRow(newBoard)) {
      // alert(currentPlayer + " won");
      while (boardRef.current.firstChild) {
        boardRef.current.removeChild(boardRef.current.firstChild);
      }

      const img = document.createElement("img");
      img.src = "/cross-svgrepo-com.svg";
      img.alt = "Cross SVG";
      boardRef.current.appendChild(img);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkRow = (board) => {
    for (let r = 0; r < 3; r++) {
      if (board[r][0] === "Q") {
        continue;
      }
      let count = 1;
      for (let c = 1; c < 3; c++) {
        if (board[r][c] !== board[r][0]) {
          break;
        }
        count++;
      }
      if (count === 3) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className={styles.board} ref={boardRef} src={winner}>
      {board.map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {row.map((cell, col) => (
            <button key={col} onClick={() => handleClick(rowIndex, col)}>
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SmallBoard;
