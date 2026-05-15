/*
 * Name: Rat in a Maze
 *
 * Approach: DFS Backtracking
 *
 * Input: Grid maze
 *
 * Output: All valid paths
 *
 * Explanation:
 * Explore all directions recursively
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning: Path generation recursion
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(n²)
 */

function findPaths(matrix) {
  const size = matrix.length;

  const result = [];

  const visited = Array(size)
    .fill()
    .map(() => Array(size).fill(false));

  const directions = [
    [1, 0, "D"],
    [0, -1, "L"],
    [0, 1, "R"],
    [-1, 0, "U"],
  ];

  function dfs(row, col, path) {
    // Destination reached
    if (row === size - 1 && col === size - 1) {
      result.push(path);
      return;
    }

    visited[row][col] = true;

    for (let [rowMove, colMove, move] of directions) {
      const nextRow = row + rowMove;
      const nextCol = col + colMove;

      if (
        nextRow >= 0 &&
        nextCol >= 0 &&
        nextRow < size &&
        nextCol < size &&
        matrix[nextRow][nextCol] === 1 &&
        !visited[nextRow][nextCol]
      ) {
        dfs(nextRow, nextCol, path + move);
      }
    }

    visited[row][col] = false;
  }

  if (matrix[0][0] === 1) {
    dfs(0, 0, "");
  }

  return result;
}

// Test Case
console.log(
  findPaths([
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1],
  ]),
); // [ 'DDRDRR', 'DRDDRR' ]
