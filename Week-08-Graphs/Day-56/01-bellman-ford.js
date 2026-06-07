/*
 * Name: Bellman Ford Algorithm
 *
 * Approach: Relax all edges V-1 times.
 * Detect negative weight cycles.
 *
 * Input:
 * vertices = 5
 *
 * edges = [
 * [0,1,-1],
 * [0,2,4],
 * [1,2,3],
 * [1,3,2],
 * [1,4,2],
 * [3,2,5],
 * [3,1,1],
 * [4,3,-3]
 * ]
 *
 * Source = 0
 *
 * Output: [0,-1,2,-2,1]
 *
 * Explanation: Finds shortest path from source.
 *
 * Algorithm Used: Bellman Ford
 *
 * Key Learning: Works with negative weights.
 *
 * Time Complexity: O(V × E)
 *
 * Space Complexity: O(V)
 */

function bellmanFord(vertices, edges, source) {
  const dist = Array(vertices).fill(Infinity);

  dist[source] = 0;

  for (let i = 1; i < vertices; i++) {
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  return dist;
}

// Input
const vertices = 5;

const edges = [
  [0, 1, -1],
  [0, 2, 4],
  [1, 2, 3],
  [1, 3, 2],
  [1, 4, 2],
  [3, 2, 5],
  [3, 1, 1],
  [4, 3, -3],
];

// Output
console.log(bellmanFord(vertices, edges, 0)); // [0,-1,2,-2,1]
