/*
 * Name: Maximum Subarray
 *
 * Approach: Kadane’s Algorithm
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 *
 * Output: 6
 *
 * Explanation:
 * At each step, decide whether to continue the subarray or start new.
 * Drop negative sums since they reduce total.
 *
 * Algorithm Used: Greedy / Dynamic Programming
 *
 * Key Learning: Ignore negative prefix sums
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function maxSubArray(nums) {
  // Edge case
  if (!nums || nums.length === 0) return 0;

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currentValue = nums[i];

    // Choose max between current element or extending previous sum
    currentSum = Math.max(currentValue, currentSum + currentValue);

    // Update global max
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Test Cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
