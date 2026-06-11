/*
 * Name: Subset Sum
 *
 * Approach: DP determines whether target sum is reachable.
 *
 * Input: nums=[3,34,4,12,5,2] target=9
 *
 * Output: true
 *
 * Algorithm Used: Dynamic Programming
 *
 * Key Learning: Boolean DP
 *
 * Time Complexity: O(n × target)
 *
 * Space Complexity: O(n × target)
 */

function subsetSum(nums, target) {
  const dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(target + 1).fill(false));

  for (let i = 0; i <= nums.length; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    for (let sum = 1; sum <= target; sum++) {
      dp[i][sum] = dp[i - 1][sum];

      if (nums[i - 1] <= sum) {
        dp[i][sum] = dp[i][sum] || dp[i - 1][sum - nums[i - 1]];
      }
    }
  }

  return dp[nums.length][target];
}

// Input
console.log(subsetSum([3, 34, 4, 12, 5, 2], 9)); // true
