import React, { useState, useRef } from "react";
import styles from "./SmallBoard.module.css";

function SmallBoard({
  currentPlayer,
  setCurrentPlayer,
  setMainBoard,
  rowIndex,
  colIndex,
  currentBoard,
  setCurrentSmallBoard,
}) {
  const initialBoard = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => "")
  );
  const [board, setBoard] = useState(initialBoard);
  const boardRef = useRef(null);
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (board[row][col] !== "" || winner || !currentBoard) {
      return;
    }

    const newBoard = board.slice();
    newBoard[row] = board[row].slice();
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      while (boardRef.current.firstChild) {
        boardRef.current.removeChild(boardRef.current.firstChild);
      }

      const img = document.createElement("img");
      if (currentPlayer === "X") {
        img.src = "/cross.svg";
        img.alt = "X Wins";
      } else {
        img.src = "/circle.svg";
        img.alt = "O Wins";
      }
      img.className = styles.centeredImage;
      boardRef.current.appendChild(img);
      setMainBoard(rowIndex, colIndex);
      setCurrentSmallBoard(row, col, true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      setCurrentSmallBoard(row, col, false);
    }
  };

  const checkWin = (board) => {
    if (checkRow(board) || checkCol(board) || checkCross(board)) {
      return true;
    }
    return false;
  };

  const checkCross = (board) => {
    if (board[0][0] !== "") {
      let count = 1;
      for (let i = 1; i < 3; i++) {
        if (board[i][i] !== board[0][0]) {
          break;
        }
        count++;
      }
      if (count === 3) {
        return true;
      }
    }
    if (board[0][2] !== "") {
      let count = 1;
      for (let i = 1; i < 3; i++) {
        if (board[i][2 - i] !== board[0][2]) {
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

  const checkRow = (board) => {
    for (let r = 0; r < 3; r++) {
      if (board[r][0] === "") {
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

  const checkCol = (board) => {
    for (let c = 0; c < 3; c++) {
      if (board[0][c] === "") {
        continue;
      }
      let count = 1;
      for (let r = 1; r < 3; r++) {
        if (board[r][c] !== board[0][c]) {
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
    <div className={(styles.board)} ref={boardRef} src={winner}>
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
