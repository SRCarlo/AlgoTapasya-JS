/*
 * Name: 0/1 Knapsack
 *
 * Approach: Use DP table where dp[i][w] represents maximum value using first i items.
 *
 * Input:
 * weights=[1,3,4,5]
 * values=[1,4,5,7]
 * capacity=7
 *
 * Output: 9
 *
 * Explanation: Choose weights 3 and 4
 *
 * Algorithm Used: Dynamic Programming
 *
 * Key Learning: Pick / Not Pick pattern
 *
 * Time Complexity: O(n × capacity)
 *
 * Space Complexity: O(n × capacity)
 */

function knapsack(weights, values, capacity) {
  const n = weights.length;

  const dp = Array(n + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w],
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

// Input
console.log(knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7)); // 9
