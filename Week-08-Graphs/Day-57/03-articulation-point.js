/*
 * Name: Articulation Point
 *
 * Approach: Use DFS and low link values.
 *
 * Input:
 * Graph:
 * 0-1-2
 * |
 * 3
 *
 * Output: [1]
 *
 * Algorithm Used: Tarjan Algorithm
 *
 * Key Learning: Critical node detection.
 *
 * Time Complexity: O(V + E)
 *
 * Space Complexity: O(V)
 */

function articulationPoint(n, edges) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);

    graph[v].push(u);
  }

  const disc = Array(n).fill(-1);

  const low = Array(n).fill(-1);

  const answer = [];

  let timer = 0;

  function dfs(u, parent) {
    disc[u] = low[u] = timer++;

    let children = 0;

    for (const v of graph[u]) {
      if (v === parent) continue;

      if (disc[v] === -1) {
        children++;

        dfs(v, u);

        low[u] = Math.min(low[u], low[v]);

        if (parent !== -1 && low[v] >= disc[u]) {
          answer.push(u);
        }
      } else {
        low[u] = Math.min(low[u], disc[v]);
      }
    }

    if (parent === -1 && children > 1) {
      answer.push(u);
    }
  }

  dfs(0, -1);

  return [...new Set(answer)];
}

// Input
console.log(
  articulationPoint(4, [
    [0, 1],
    [1, 2],
    [1, 3],
  ]),
); // [1]
