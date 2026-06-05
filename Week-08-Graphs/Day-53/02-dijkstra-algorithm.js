/*
 * Name: Dijkstra Algorithm
 *
 * Approach:
 * Repeatedly choose node
 * with minimum distance.
 *
 * Input:
 * Graph:
 * A→B=1
 * A→C=4
 * B→C=2
 *
 * Output:
 * {
 * A:0,
 * B:1,
 * C:3
 * }
 *
 * Algorithm Used:
 * Dijkstra
 *
 * Key Learning:
 * Weighted shortest path.
 *
 * Time Complexity:
 * O(V²)
 *
 * Space Complexity:
 * O(V)
 */

function dijkstra(graph, start) {
  const dist = {};

  const visited = new Set();

  for (const node in graph) {
    dist[node] = Infinity;
  }

  dist[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    let current = null;

    for (const node in dist) {
      if (!visited.has(node)) {
        if (current === null || dist[node] < dist[current]) {
          current = node;
        }
      }
    }

    visited.add(current);

    for (const [next, weight] of graph[current]) {
      dist[next] = Math.min(dist[next], dist[current] + weight);
    }
  }

  return dist;
}

// Input
const graph = {
  A: [
    ["B", 1],
    ["C", 4],
  ],

  B: [["C", 2]],

  C: [],
};

// Output
console.log(dijkstra(graph, "A"));

/*
Output:
{
A:0,
B:1,
C:3
}
*/
