/*
 * Name: Cheapest Flights Within K Stops
 *
 * Approach:
 * BFS with cost tracking.
 *
 * Input:
 * n = 4
 * flights =
 * [
 * [0,1,100],
 * [1,2,100],
 * [2,3,100]
 * ]
 *
 * Output:
 * 300
 *
 * Algorithm Used:
 * BFS
 *
 * Key Learning:
 * State traversal.
 *
 * Time Complexity:
 * O(E × K)
 *
 * Space Complexity:
 * O(V)
 */

function cheapestFlight(n, flights, src, dst, k) {
  const queue = [[src, 0, 0]];

  let answer = Infinity;

  while (queue.length) {
    const [node, cost, stops] = queue.shift();

    if (node === dst) {
      answer = Math.min(answer, cost);

      continue;
    }

    if (stops > k) {
      continue;
    }

    for (const [u, v, price] of flights) {
      if (u === node) {
        queue.push([v, cost + price, stops + 1]);
      }
    }
  }

  return answer === Infinity ? -1 : answer;
}

// Input
console.log(
  cheapestFlight(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 3, 100],
    ],
    0,
    3,
    2,
  ),
); // 300
