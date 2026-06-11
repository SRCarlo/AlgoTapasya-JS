/*
 * Name: Target Sum
 *
 * Approach: Convert signs problem into subset count.
 *
 * Input: nums=[1,1,1,1,1] target=3
 *
 * Output: 5
 *
 * Algorithm Used: Dynamic Programming
 *
 * Key Learning: Count based DP
 *
 * Time Complexity: O(n × target)
 *
 * Space Complexity: O(target)
 */

function findTargetSumWays(nums, target) {
  const total = nums.reduce((a, b) => a + b, 0);

  if ((total + target) % 2) return 0;

  const sum = (total + target) / 2;

  const dp = Array(sum + 1).fill(0);

  dp[0] = 1;

  for (const num of nums) {
    for (let i = sum; i >= num; i--) {
      dp[i] += dp[i - num];
    }
  }

  return dp[sum];
}

// Input
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5
