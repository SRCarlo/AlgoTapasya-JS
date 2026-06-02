/*
 * Name: Graph Representation using Adjacency List
 *
 * Approach:
 * Store each node and its neighbors
 * using an object.
 *
 * Input:
 * Edges:
 * 0 - 1
 * 0 - 2
 * 1 - 2
 * 2 - 3
 *
 * Output:
 * {
 *   0: [1,2],
 *   1: [0,2],
 *   2: [0,1,3],
 *   3: [2]
 * }
 *
 * Explanation:
 * Each vertex stores its adjacent vertices.
 *
 * Algorithm Used:
 * Adjacency List Construction
 *
 * Key Learning:
 * Most commonly used graph representation.
 *
 * Time Complexity:
 * O(V + E)
 *
 * Space Complexity:
 * O(V + E)
 */

function buildGraph(edges) {
  const graph = {};

  for (const [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];

    graph[u].push(v);
    graph[v].push(u);
  }

  return graph;
}

// Input
const edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
];

// Output
console.log(buildGraph(edges));

/*
Output:
{
  '0': [1,2],
  '1': [0,2],
  '2': [0,1,3],
  '3': [2]
}
*/
