/*
 *
 * Name: Maximum Average Subarray I
 *
 * Approach: Sliding Window
 *
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 *
 * Output: 12.75
 *
 * Explanation:
 * Maintain window sum and slide forward
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Reuse previous computation
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function findMaxAverage(nums, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}

// Test Cases
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
