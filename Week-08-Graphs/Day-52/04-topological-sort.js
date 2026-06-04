/*
 * Name: Topological Sort
 *
 * Approach: Use DFS.
 * Add node after visiting all neighbors.
 *
 * Input:
 *          5 → 2
 *          ↓
 *          0
 *
 * Output: [5,2,0]
 *
 * Explanation: Dependency order.
 *
 * Algorithm Used: DFS + Stack
 *
 * Key Learning: Ordering in DAG.
 *
 * Time Complexity: O(V + E)
 *
 * Space Complexity: O(V)
 */

function topoSort(graph) {
  const visited = new Set();

  const stack = [];

  function dfs(node) {
    visited.add(node);

    for (const next of graph[node]) {
      if (!visited.has(next)) {
        dfs(next);
      }
    }

    stack.push(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack.reverse();
}

// Input
const graph = {
  5: [2, 0],
  4: [0, 1],
  2: [3],
  3: [1],
  1: [],
  0: [],
};

// Output
console.log(topoSort(graph)); // [4,5,0,2,3,1]
