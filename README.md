# TetraTic

TetraTic is an Ultimate Tic-Tac-Toe game built using React + Vite. It takes the classic Tic-Tac-Toe to the next level with a 9×9 grid divided into 9 smaller 3×3 boards, making the gameplay more strategic and exciting.

## 🚀 Features

- React + Vite for fast performance and modern UI

- Ultimate Tic-Tac-Toe mechanics with strategic depth

- Component-based architecture for modularity

## 🎯 Game Rules

### 1. Board Structure:

- The game consists of a 9×9 grid, divided into 9 smaller 3×3 Tic-Tac-Toe boards.
- Players alternate turns as X and O.

### 2. Turn Mechanics:

- A player can only place their mark inside a small board determined by the previous move.
- If a player places their mark in a cell of a small board, the opponent must play in the corresponding small board in the same position.
- If the required small board is already won or full, the player can choose any free board.

### 3. Winning a Small Board:

- A small board is won when a player gets three marks in a row (horizontally, vertically, or diagonally).
- Once a board is won, it is marked with the winner’s symbol.
  
### 4. Winning the Game:

- The game is won by the player who wins 3 small boards in a row, similar to classic Tic-Tac-Toe.
- If all small boards are filled and no player has won, the game ends in a tie.

