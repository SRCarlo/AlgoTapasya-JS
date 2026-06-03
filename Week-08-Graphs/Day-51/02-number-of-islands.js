/*
 * Name: Number of Islands
 *
 * Approach:
 * Traverse grid using DFS.
 * Mark visited land.
 *
 * Input:
 * [
 * ['1','1','0'],
 * ['0','1','0'],
 * ['1','0','1']
 * ]
 *
 * Output:
 * 3
 *
 * Algorithm Used:
 * DFS
 *
 * Key Learning:
 * Grid traversal problems.
 *
 * Time Complexity:
 * O(rows × cols)
 *
 * Space Complexity:
 * O(rows × cols)
 */

function numIslands(grid) {
  let islands = 0;

  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= grid.length ||
      c >= grid[0].length ||
      grid[r][c] === "0"
    ) {
      return;
    }

    grid[r][c] = "0";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        islands++;

        dfs(r, c);
      }
    }
  }

  return islands;
}

// Input
const grid = [
  ["1", "1", "0"],
  ["0", "1", "0"],
  ["1", "0", "1"],
];

// Output
console.log(numIslands(grid)); // 3
