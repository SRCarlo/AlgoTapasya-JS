/*
 * Name: Graph Representation using Adjacency Matrix
 *
 * Approach:
 * Use a 2D matrix where
 * matrix[i][j] = 1 if edge exists.
 *
 * Input:
 * Vertices = 4
 * Edges:
 * [0,1], [0,2], [1,2], [2,3]
 *
 * Output:
 * [
 *  [0,1,1,0],
 *  [1,0,1,0],
 *  [1,1,0,1],
 *  [0,0,1,0]
 * ]
 *
 * Explanation:
 * Matrix stores connection status.
 *
 * Algorithm Used:
 * Adjacency Matrix
 *
 * Key Learning:
 * Useful for dense graphs.
 *
 * Time Complexity:
 * O(V²)
 *
 * Space Complexity:
 * O(V²)
 */

function adjacencyMatrix(vertices, edges) {
  const matrix = Array(vertices)
    .fill()
    .map(() => Array(vertices).fill(0));

  for (const [u, v] of edges) {
    matrix[u][v] = 1;
    matrix[v][u] = 1;
  }

  return matrix;
}

// Input
const vertices = 4;

const edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
];

// Output
console.log(adjacencyMatrix(vertices, edges));

/*
Output:
[
 [0,1,1,0],
 [1,0,1,0],
 [1,1,0,1],
 [0,0,1,0]
]
*/
