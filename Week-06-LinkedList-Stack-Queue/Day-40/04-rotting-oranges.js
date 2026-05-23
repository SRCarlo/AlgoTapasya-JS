/*
 * Name: Rotting Oranges
 *
 * Approach: Multi-source BFS
 *
 * Input:
 * [
 *   [2,1,1],
 *   [1,1,0],
 *   [0,1,1]
 * ]
 *
 * Output: 4
 *
 * Explanation: BFS spreads rot level by level each minute.
 *
 * Algorithm Used: Breadth First Search
 *
 * Key Learning: Multi-source traversal
 *
 * Time Complexity: O(m × n)
 *
 * Space Complexity: O(m × n)
 */

function orangesRotting(grid) {
  const rows = grid.length;

  const cols = grid[0].length;

  const queue = [];

  let fresh = 0;

  let minutes = 0;

  // Initialize queue
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      }

      if (grid[row][col] === 1) {
        fresh++;
      }
    }
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // BFS traversal
  while (queue.length > 0 && fresh > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();

      for (let [dx, dy] of directions) {
        let newRow = row + dx;

        let newCol = col + dy;

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < rows &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 2;

          fresh--;

          queue.push([newRow, newCol]);
        }
      }
    }

    minutes++;
  }

  return fresh === 0 ? minutes : -1;
}

// Test Case
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
); // 4
