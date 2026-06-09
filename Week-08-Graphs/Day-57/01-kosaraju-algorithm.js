/*
 * Name: Kosaraju Algorithm
 *
 * Approach:
 * Perform DFS for ordering.
 * Reverse graph and DFS again to count strongly connected components.
 *
 * Input:
 * Graph:
 * 0 → 1
 * 1 → 2
 * 2 → 0
 * 1 → 3
 *
 * Output: 2
 *
 * Explanation: SCC1 = [0,1,2]
 *              SCC2 = [3]
 *
 * Algorithm Used: Kosaraju Algorithm
 *
 * Key Learning: Strongly Connected Components.
 *
 * Time Complexity: O(V + E)
 *
 * Space Complexity: O(V)
 */

function kosaraju(graph) {
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

  const reversed = {};

  for (const node in graph) {
    reversed[node] = [];
  }

  for (const node in graph) {
    for (const next of graph[node]) {
      reversed[next].push(node);
    }
  }

  visited.clear();

  let count = 0;

  function reverseDFS(node) {
    visited.add(node);

    for (const next of reversed[node]) {
      if (!visited.has(next)) {
        reverseDFS(next);
      }
    }
  }

  while (stack.length) {
    const node = stack.pop();

    if (!visited.has(node)) {
      count++;

      reverseDFS(node);
    }
  }

  return count;
}

// Input
const graph = {
  0: [1],
  1: [2, 3],
  2: [0],
  3: [],
};

// Output
console.log(kosaraju(graph)); // 2
