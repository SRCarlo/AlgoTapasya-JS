/*
 * Name: N-Queens II
 *
 * Approach: Backtracking
 *
 * Input: n = 4
 *
 * Output: 2
 *
 * Explanation: Count all valid queen placements.
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning: Constraint recursion optimization
 *
 * Time Complexity: O(n!)
 *
 * Space Complexity: O(n)
 */

function totalNQueens(n) {
  let solutions = 0;

  const columns = new Set();
  const diagonals = new Set();
  const antiDiagonals = new Set();

  function backtrack(row) {
    // Valid arrangement found
    if (row === n) {
      solutions++;
      return;
    }

    for (let col = 0; col < n; col++) {
      const diagonal = row - col;
      const antiDiagonal = row + col;

      // Invalid placement
      if (
        columns.has(col) ||
        diagonals.has(diagonal) ||
        antiDiagonals.has(antiDiagonal)
      ) {
        continue;
      }

      // Choose
      columns.add(col);
      diagonals.add(diagonal);
      antiDiagonals.add(antiDiagonal);

      // Explore
      backtrack(row + 1);

      // Undo
      columns.delete(col);
      diagonals.delete(diagonal);
      antiDiagonals.delete(antiDiagonal);
    }
  }

  backtrack(0);

  return solutions;
}

// Test Case
console.log(totalNQueens(4)); // 2
