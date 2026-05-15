/*
 * Name: Unique Paths III
 *
 * Approach: DFS Backtracking
 *
 * Input: Grid
 *
 * Output: Number of valid paths
 *
 * Explanation:
 * Visit every non-obstacle exactly once
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning: Complete path traversal
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(rows * cols)
 */

function uniquePathsIII(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let emptyCells = 0;

  let startRow = 0;
  let startCol = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] >= 0) {
        emptyCells++;
      }

      if (grid[row][col] === 1) {
        startRow = row;
        startCol = col;
      }
    }
  }

  function dfs(row, col, remaining) {
    // Invalid position
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === -1
    ) {
      return 0;
    }

    // Destination reached
    if (grid[row][col] === 2) {
      return remaining === 1 ? 1 : 0;
    }

    const current = grid[row][col];

    // Mark visited
    grid[row][col] = -1;

    let totalPaths = 0;

    totalPaths += dfs(row + 1, col, remaining - 1);
    totalPaths += dfs(row - 1, col, remaining - 1);
    totalPaths += dfs(row, col + 1, remaining - 1);
    totalPaths += dfs(row, col - 1, remaining - 1);

    // Restore state
    grid[row][col] = current;

    return totalPaths;
  }

  return dfs(startRow, startCol, emptyCells);
}

// Test Case
console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ]),
); // 2
