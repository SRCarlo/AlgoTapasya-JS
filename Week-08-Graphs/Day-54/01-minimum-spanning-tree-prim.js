/*
 * Name: Minimum Spanning Tree (Prim's Algorithm)
 *
 * Approach: Start from any node and repeatedly choose minimum edge.
 *
 * Input:
 * Graph:
 * A-B = 1
 * A-C = 4
 * B-C = 2
 *
 * Output: MST Cost = 3
 *
 * Algorithm Used: Prim's Algorithm
 *
 * Key Learning: Greedy edge selection.
 *
 * Time Complexity: O(V²)
 *
 * Space Complexity: O(V)
 */

function prim(graph) {
  const visited = new Set();

  visited.add("A");

  let cost = 0;

  while (visited.size < Object.keys(graph).length) {
    let minEdge = Infinity;

    let nextNode = null;

    for (const node of visited) {
      for (const [neighbor, weight] of graph[node]) {
        if (!visited.has(neighbor) && weight < minEdge) {
          minEdge = weight;

          nextNode = neighbor;
        }
      }
    }

    visited.add(nextNode);

    cost += minEdge;
  }

  return cost;
}

// Input
const graph = {
  A: [
    ["B", 1],
    ["C", 4],
  ],
  B: [
    ["A", 1],
    ["C", 2],
  ],
  C: [
    ["A", 4],
    ["B", 2],
  ],
};

// Output
console.log(prim(graph)); // 3
