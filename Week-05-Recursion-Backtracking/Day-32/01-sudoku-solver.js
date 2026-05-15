/*
 * Name: Sudoku Solver
 *
 * Approach: Backtracking
 *
 * Input: 9x9 Sudoku Board
 *
 * Output: Solved board
 *
 * Explanation:
 * Try valid digits recursively
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Constraint satisfaction
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(1)
 */

function solveSudoku(board) {
  function isValid(row, col, value) {
    for (let index = 0; index < 9; index++) {
      // Row check
      if (board[row][index] === value) {
        return false;
      }

      // Column check
      if (board[index][col] === value) {
        return false;
      }

      // Box check
      const boxRow = 3 * Math.floor(row / 3) + Math.floor(index / 3);

      const boxCol = 3 * Math.floor(col / 3) + (index % 3);

      if (board[boxRow][boxCol] === value) {
        return false;
      }
    }

    return true;
  }

  function backtrack() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] !== ".") {
          continue;
        }

        for (let digit = 1; digit <= 9; digit++) {
          const value = digit.toString();

          if (!isValid(row, col, value)) {
            continue;
          }

          // Choose
          board[row][col] = value;

          // Explore
          if (backtrack()) {
            return true;
          }

          // Undo
          board[row][col] = ".";
        }

        return false;
      }
    }

    return true;
  }

  backtrack();

  return board;
}


// Test Case
const sudokuBoard = [
 ["5","3",".",".","7",".",".",".","."],
 ["6",".",".","1","9","5",".",".","."],
 [".","9","8",".",".",".",".","6","."],
 ["8",".",".",".","6",".",".",".","3"],
 ["4",".",".","8",".","3",".",".","1"],
 ["7",".",".",".","2",".",".",".","6"],
 [".","6",".",".",".",".","2","8","."],
 [".",".",".","4","1","9",".",".","5"],
 [".",".",".",".","8",".",".","7","9"]
];

console.log(solveSudoku(sudokuBoard));