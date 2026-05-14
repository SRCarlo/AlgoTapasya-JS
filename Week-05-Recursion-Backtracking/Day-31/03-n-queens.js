/*
 * Name: N-Queens
 *
 * Approach: Backtracking
 *
 * Input: n = 4
 *
 * Output: All valid queen placements
 *
 * Explanation:
 * Place queens row-by-row safely
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Constraint recursion
 *
 * Time Complexity: O(n!)
 *
 * Space Complexity: O(n²)
 */

function solveNQueens(n) {
  const result = [];

  const board = Array(n)
    .fill()
    .map(() => Array(n).fill("."));

  const columns = new Set();
  const diagonal1 = new Set();
  const diagonal2 = new Set();

  function backtrack(row) {
    // Valid board completed
    if (row === n) {
      result.push(board.map((row) => row.join("")));

      return;
    }

    for (let col = 0; col < n; col++) {
      if (
        columns.has(col) ||
        diagonal1.has(row - col) ||
        diagonal2.has(row + col)
      ) {
        continue;
      }

      // Place queen
      board[row][col] = "Q";

      columns.add(col);
      diagonal1.add(row - col);
      diagonal2.add(row + col);

      // Explore
      backtrack(row + 1);

      // Undo
      board[row][col] = ".";

      columns.delete(col);
      diagonal1.delete(row - col);
      diagonal2.delete(row + col);
    }
  }

  backtrack(0);

  return result;
}

// Test Cases
console.log(solveNQueens(4)); // [[ '.Q..', '...Q', 'Q...', '..Q.' ], [ '..Q.', 'Q...', '...Q', '.Q..' ]]
