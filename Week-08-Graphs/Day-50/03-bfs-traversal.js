/*
 * Name: Breadth First Search (BFS)
 *
 * Approach:
 * Use queue to visit nodes
 * level by level.
 *
 * Input:
 * Graph:
 * 0 -> [1,2]
 * 1 -> [0,3]
 * 2 -> [0]
 * 3 -> [1]
 *
 * Start Node:
 * 0
 *
 * Output:
 * [0,1,2,3]
 *
 * Explanation:
 * BFS explores nearest nodes first.
 *
 * Algorithm Used:
 * Breadth First Search
 *
 * Key Learning:
 * Queue-based graph traversal.
 *
 * Time Complexity:
 * O(V + E)
 *
 * Space Complexity:
 * O(V)
 */

function bfs(graph, start) {
  const visited = new Set();

  const queue = [start];

  const result = [];

  visited.add(start);

  while (queue.length) {
    const node = queue.shift();

    result.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);

        queue.push(neighbor);
      }
    }
  }

  return result;
}

// Input
const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0],
  3: [1],
};

// Output
console.log(bfs(graph, 0)); // [0,1,2,3]
