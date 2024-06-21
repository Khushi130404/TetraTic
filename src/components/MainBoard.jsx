import React, { useState, useRef } from "react";
import SmallBoard from "./SmallBoard";
import styles from "./MainBoard.module.css";

function MainBoard() {
  const initialBoard = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => "")
  );
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const boardRef = useRef(null);
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (board[row][col] !== "" || winner) {
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
      img.src = "/cross.svg";
      img.alt = "Cross Win";
      boardRef.current.appendChild(img);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
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
    <div className={styles.board} ref={boardRef} src={winner}>
      {board.map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {row.map((cell, col) => (
            <SmallBoard
              key={col}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
            ></SmallBoard>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MainBoard;
