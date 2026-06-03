/*
 * Name: Rotting Oranges
 *
 * Approach:
 * Use multi-source BFS.
 *
 * Input:
 * [
 * [2,1,1],
 * [1,1,0],
 * [0,1,1]
 * ]
 *
 * Output:
 * 4
 *
 * Explanation:
 * All oranges become rotten
 * in 4 minutes.
 *
 * Algorithm Used:
 * BFS
 *
 * Key Learning:
 * Multi-source BFS.
 *
 * Time Complexity:
 * O(rows × cols)
 *
 * Space Complexity:
 * O(rows × cols)
 */

function orangesRotting(grid) {
  const queue = [];

  let fresh = 0;

  let minutes = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      }

      if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length && fresh) {
    let size = queue.length;

    while (size--) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of dir) {
        const nr = r + dr;

        const nc = c + dc;

        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < grid.length &&
          nc < grid[0].length &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2;

          fresh--;

          queue.push([nr, nc]);
        }
      }
    }

    minutes++;
  }

  return fresh ? -1 : minutes;
}

// Input
const oranges = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

// Output
console.log(orangesRotting(oranges)); // 4
