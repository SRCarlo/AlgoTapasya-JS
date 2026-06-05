/*
 * Name: Shortest Path in Unweighted Graph
 *
 * Approach:
 * Use BFS because every edge
 * has equal weight.
 *
 * Input:
 * Graph:
 * 0 → [1,2]
 * 1 → [3]
 * 2 → [3]
 *
 * Start = 0
 *
 * Output:
 * {
 * 0:0,
 * 1:1,
 * 2:1,
 * 3:2
 * }
 *
 * Explanation:
 * BFS guarantees shortest path.
 *
 * Algorithm Used:
 * Breadth First Search
 *
 * Key Learning:
 * BFS finds shortest path
 * in unweighted graphs.
 *
 * Time Complexity:
 * O(V + E)
 *
 * Space Complexity:
 * O(V)
 */

function shortestPath(graph, start) {
  const distance = {};

  const queue = [start];

  distance[start] = 0;

  while (queue.length) {
    const node = queue.shift();

    for (const next of graph[node]) {
      if (distance[next] === undefined) {
        distance[next] = distance[node] + 1;

        queue.push(next);
      }
    }
  }

  return distance;
}

// Input
const graph = {
  0: [1, 2],
  1: [3],
  2: [3],
  3: [],
};

// Output
console.log(shortestPath(graph, 0));

/*
Output:
{
0:0,
1:1,
2:1,
3:2
}
*/
