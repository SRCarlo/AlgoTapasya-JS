/*
 * Name: Redundant Connection
 *
 * Approach: Detect first edge creating cycle.
 *
 * Input:
 * [[1,2],
 * [1,3],
 * [2,3]]
 *
 * Output: [2,3]
 *
 * Algorithm Used: Union Find
 *
 * Key Learning: Cycle detection.
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function redundantConnection(edges) {
  const parent = {};

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }

    return parent[x];
  }

  function union(a, b) {
    parent[find(a)] = find(b);
  }

  for (const [u, v] of edges) {
    if (parent[u] === undefined) parent[u] = u;

    if (parent[v] === undefined) parent[v] = v;

    if (find(u) === find(v)) {
      return [u, v];
    }

    union(u, v);
  }
}

// Input
console.log(
  redundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
); // [2,3]
