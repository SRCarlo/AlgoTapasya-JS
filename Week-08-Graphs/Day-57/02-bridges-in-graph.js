/*
 * Name: Bridges in Graph
 *
 * Approach: Use DFS with discovery and low times.
 *
 * Input:
 * 0-1
 * |
 * 2-3
 *
 * Output: [[2,3]]
 *
 * Algorithm Used: Tarjan DFS
 *
 * Key Learning: Critical connections.
 *
 * Time Complexity: O(V + E)
 *
 * Space Complexity: O(V)
 */

function criticalConnections(n, connections) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v] of connections) {
    graph[u].push(v);

    graph[v].push(u);
  }

  const disc = Array(n).fill(-1);

  const low = Array(n).fill(-1);

  const result = [];

  let time = 0;

  function dfs(node, parent) {
    disc[node] = low[node] = time++;

    for (const next of graph[node]) {
      if (next === parent) continue;

      if (disc[next] === -1) {
        dfs(next, node);

        low[node] = Math.min(low[node], low[next]);

        if (low[next] > disc[node]) {
          result.push([node, next]);
        }
      } else {
        low[node] = Math.min(low[node], disc[next]);
      }
    }
  }

  dfs(0, -1);

  return result;
}

// Input
console.log(
  criticalConnections(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ]),
); // [[1,3]]
