/*
 * Name: Partition Equal Subset Sum
 *
 * Approach: Convert into subset sum.
 *
 * Input: [1,5,11,5]
 *
 * Output: true
 *
 * Explanation: [1,5,5] = [11]
 *
 * Algorithm Used: Dynamic Programming
 *
 * Key Learning: Problem transformation
 *
 * Time Complexity: O(n × sum)
 *
 * Space Complexity: O(sum)
 */

function canPartition(nums) {
  const total = nums.reduce((a, b) => a + b, 0);

  if (total % 2) return false;

  const target = total / 2;

  const dp = Array(target + 1).fill(false);

  dp[0] = true;

  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
}

// Input
console.log(canPartition([1, 5, 11, 5])); // true
