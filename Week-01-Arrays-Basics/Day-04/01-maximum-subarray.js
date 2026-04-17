/*
 * Name: Maximum Subarray

 * Approach: Kadane’s Algorithm

 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]

 * Output: 6

 * Explanation:
 * Keep track of current sum, reset when negative.
 * 
 * Algorithm Used: Greedy (Kadane)
 * 
 * Key Learning: Drop negative prefix
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1)
 * 
 */

function maxSubArray(nums) {
  if (!nums || nums.length === 0) return 0;

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Test Cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([-1, -2, -3])); // -1
