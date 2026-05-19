/*
 * Name: Shortest Path Visiting All Nodes
 *
 * Approach: BFS + Bitmask
 *
 * Input: Graph adjacency list
 *
 * Output: Shortest path length
 *
 * Explanation: Visit all nodes with minimum steps.
 *
 * Algorithm Used: BFS + Bitmask DP
 *
 * Key Learning: State compression traversal
 *
 * Time Complexity: O(2^n × n)
 *
 * Space Complexity: O(2^n × n)
 */

function shortestPathLength(graph) {
  const totalNodes = graph.length;

  const finalMask = (1 << totalNodes) - 1;

  const queue = [];

  const visited = new Set();

  // Initialize BFS
  for (let node = 0; node < totalNodes; node++) {
    const mask = 1 << node;

    queue.push([node, mask, 0]);

    visited.add(`${node}-${mask}`);
  }

  while (queue.length > 0) {
    const [currentNode, currentMask, distance] = queue.shift();

    // All nodes visited
    if (currentMask === finalMask) {
      return distance;
    }

    for (let neighbor of graph[currentNode]) {
      const nextMask = currentMask | (1 << neighbor);

      const state = `${neighbor}-${nextMask}`;

      if (visited.has(state)) {
        continue;
      }

      visited.add(state);

      queue.push([neighbor, nextMask, distance + 1]);
    }
  }

  return -1;
}

// Test Case
console.log(shortestPathLength([[1, 2, 3], [0], [0], [0]])); // 4
