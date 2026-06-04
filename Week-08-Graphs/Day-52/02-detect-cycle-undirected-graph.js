/*
 * Name: Detect Cycle in Undirected Graph
 *
 * Approach:
 * DFS traversal with parent tracking.
 *
 * Input:
 *       0 - 1
 *       |   |
 *       2 - 3
 *
 * Output: true
 *
 * Explanation: Back edge creates cycle.
 *
 * Algorithm Used: DFS
 *
 * Key Learning: Parent node handling.
 *
 * Time Complexity: O(V + E)
 *
 * Space Complexity: O(V)
 */

function hasCycle(graph) {
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    for (const next of graph[node]) {
      if (!visited.has(next)) {
        if (dfs(next, node)) {
          return true;
        }
      } else if (next !== parent) {
        return true;
      }
    }

    return false;
  }

  return dfs(0, -1);
}

// Input
const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2],
};

// Output
console.log(hasCycle(graph)); // true
