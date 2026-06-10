/*
 * Name: Coin Change
 *
 * Approach: Build DP array from small amounts.
 *
 * Input: coins=[1,2,5]
 *        amount=11
 *
 * Output: 3
 *
 * Explanation: 5 + 5 + 1
 *
 * Algorithm Used: Dynamic Programming
 *
 * Key Learning: Minimum State
 *
 * Time Complexity: O(amount × coins)
 *
 * Space Complexity: O(amount)
 */

function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Input
console.log(coinChange([1, 2, 5], 11)); // 3
