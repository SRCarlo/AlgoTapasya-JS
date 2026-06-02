/*
 * Name: Depth First Search (DFS)
 *
 * Approach:
 * Recursively visit all
 * unvisited neighbors.
 *
 * Input:
 * Graph:
 * 0 -> [1,2]
 * 1 -> [0,3]
 * 2 -> [0]
 * 3 -> [1]
 *
 * Start Node:
 * 0
 *
 * Output:
 * [0,1,3,2]
 *
 * Explanation:
 * DFS explores depth first.
 *
 * Algorithm Used:
 * Depth First Search
 *
 * Key Learning:
 * Recursive graph traversal.
 *
 * Time Complexity:
 * O(V + E)
 *
 * Space Complexity:
 * O(V)
 */

function dfs(graph, start) {
  const visited = new Set();

  const result = [];

  function traverse(node) {
    visited.add(node);

    result.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        traverse(neighbor);
      }
    }
  }

  traverse(start);

  return result;
}

// Input
const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0],
  3: [1],
};

// Output
console.log(dfs(graph, 0)); // [0,1,3,2]
