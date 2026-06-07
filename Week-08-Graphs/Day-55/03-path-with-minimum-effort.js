/*
 * Name: Path With Minimum Effort
 *
 * Approach: Use Dijkstra.
 *
 * Input:
 * [
 * [1,2,2],
 * [3,8,2],
 * [5,3,5]
 * ]
 *
 * Output: 2
 *
 * Algorithm Used: Dijkstra
 *
 * Key Learning: Minimize maximum edge.
 *
 * Time Complexity: O(rows × cols × log n)
 *
 * Space Complexity: O(rows × cols)
 */

function minimumEffortPath(heights) {
  const rows = heights.length;

  const cols = heights[0].length;

  const dist = Array(rows)
    .fill()
    .map(() => Array(cols).fill(Infinity));

  dist[0][0] = 0;

  const queue = [[0, 0, 0]];

  while (queue.length) {
    queue.sort((a, b) => a[0] - b[0]);

    const [effort, r, c] = queue.shift();

    if (r === rows - 1 && c === cols - 1) return effort;

    for (const [dr, dc] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const nr = r + dr;

      const nc = c + dc;

      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols) {
        const next = Math.max(
          effort,
          Math.abs(heights[r][c] - heights[nr][nc]),
        );

        if (next < dist[nr][nc]) {
          dist[nr][nc] = next;

          queue.push([next, nr, nc]);
        }
      }
    }
  }
}

// Input
console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ]),
); // 2
