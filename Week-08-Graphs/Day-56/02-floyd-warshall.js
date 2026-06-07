/*
 * Name: Floyd Warshall Algorithm
 *
 * Approach: Consider every node as intermediate.
 *
 * Input:
 * [
 * [0,5,INF,10],
 * [INF,0,3,INF],
 * [INF,INF,0,1],
 * [INF,INF,INF,0]
 * ]
 *
 * Output:
 * [
 * [0,5,8,9]
 * ...
 * ]
 *
 * Algorithm Used: Floyd Warshall
 *
 * Key Learning: All pairs shortest path.
 *
 * Time Complexity: O(n³)
 *
 * Space Complexity: O(n²)
 */

function floydWarshall(graph) {
  const n = graph.length;

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  return graph;
}

const INF = Infinity;

// Input
const matrix = [
  [0, 5, INF, 10],
  [INF, 0, 3, INF],
  [INF, INF, 0, 1],
  [INF, INF, INF, 0],
];

// Output
console.log(floydWarshall(matrix));

/*
Output:
[
[0,5,8,9],
[∞,0,3,4],
[∞,∞,0,1],
[∞,∞,∞,0]
]
*/
