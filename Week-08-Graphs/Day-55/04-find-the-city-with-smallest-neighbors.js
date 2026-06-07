/*
 * Name: Find the City With Smallest Number of Neighbors
 *
 * Approach: Floyd Warshall.
 *
 * Input: n = 4
 *
 * Output: 3
 *
 * Algorithm Used: Floyd Warshall
 *
 * Key Learning: All-pairs shortest path.
 *
 * Time Complexity: O(n³)
 *
 * Space Complexity: O(n²)
 */

function findCity(n, edges, threshold) {
  const dist = Array(n)
    .fill()
    .map(() => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (const [u, v, w] of edges) {
    dist[u][v] = w;

    dist[v][u] = w;
  }

  for (let k = 0; k < n; k++)
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }

  let city = -1;

  let min = n;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (dist[i][j] <= threshold) count++;
    }

    if (count <= min) {
      min = count;

      city = i;
    }
  }

  return city;
}

// Input
console.log(
  findCity(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [2, 3, 4],
      [0, 3, 7],
    ],
    4,
  ),
); // 3
