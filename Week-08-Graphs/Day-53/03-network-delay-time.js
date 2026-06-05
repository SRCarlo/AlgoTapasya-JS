/*
 * Name: Network Delay Time
 *
 * Approach:
 * Apply shortest path logic
 * from source node.
 *
 * Input:
 * times =
 * [[2,1,1],
 * [2,3,1],
 * [3,4,1]]
 *
 * n = 4
 * k = 2
 *
 * Output:
 * 2
 *
 * Algorithm Used:
 * Dijkstra
 *
 * Key Learning:
 * Signal propagation problems.
 *
 * Time Complexity:
 * O(V²)
 *
 * Space Complexity:
 * O(V)
 */

function networkDelayTime(times, n, k) {
  const dist = Array(n + 1).fill(Infinity);

  dist[k] = 0;

  let changed = true;

  while (changed) {
    changed = false;

    for (const [u, v, w] of times) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;

        changed = true;
      }
    }
  }

  const ans = Math.max(...dist.slice(1));

  return ans === Infinity ? -1 : ans;
}

// Input
console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2,
  ),
); // 2
