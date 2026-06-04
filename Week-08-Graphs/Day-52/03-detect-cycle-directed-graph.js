/*
 * Name: Detect Cycle in Directed Graph
 *
 * Approach: Track recursion path.
 *
 * Input:
 *       0 → 1 → 2
 *       ↑     ↓
 *       ← ← ← 
 *
 * Output: true
 *
 * Algorithm Used: DFS
 *
 * Key Learning: Recursion stack tracking.
 *
 * Time Complexity: O(V + E)
 *
 * Space Complexity: O(V)
 */

function detectCycle(graph) {
  const visited = new Set();

  const path = new Set();

  function dfs(node) {
    if (path.has(node)) {
      return true;
    }

    if (visited.has(node)) {
      return false;
    }

    visited.add(node);

    path.add(node);

    for (const next of graph[node]) {
      if (dfs(next)) {
        return true;
      }
    }

    path.delete(node);

    return false;
  }

  for (const node in graph) {
    if (dfs(node)) {
      return true;
    }
  }

  return false;
}

// Input
const graph = {
  0: [1],
  1: [2],
  2: [0],
};

// Output
console.log(detectCycle(graph)); // true
