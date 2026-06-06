/*
 * Name: Minimum Spanning Tree (Kruskal)
 *
 * Approach: Sort edges and connect components using DSU.
 *
 * Input:
 * [
 * ["A","B",1],
 * ["B","C",2],
 * ["A","C",4]
 * ]
 *
 * Output: MST Cost = 3
 *
 * Algorithm Used: Kruskal + Union Find
 *
 * Key Learning: Component merging.
 *
 * Time Complexity: O(E log E)
 *
 * Space Complexity: O(V)
 */

function kruskal(edges) {
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
    parent[u] = u;

    parent[v] = v;
  }

  edges.sort((a, b) => a[2] - b[2]);

  let cost = 0;

  for (const [u, v, w] of edges) {
    if (find(u) !== find(v)) {
      union(u, v);

      cost += w;
    }
  }

  return cost;
}

// Input
console.log(
  kruskal([
    ["A", "B", 1],
    ["B", "C", 2],
    ["A", "C", 4],
  ]),
); // 3
