/*
 * Name: Subarray Product Less Than K
 *
 * Approach: Sliding Window
 *
 * Input: nums = [10,5,2,6], k = 100
 *
 * Output: 8
 *
 * Explanation:
 * Count subarrays ending at each index
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Count windows dynamically
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0;

  let left = 0;
  let product = 1;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    product = product * nums[right];

    while (product >= k) {
      product = product / nums[left];
      left++;
    }

    count = count + right - left + 1;
  }

  return count;
}

// Test Cases
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
console.log(numSubarrayProductLessThanK([1, 2, 3], 0)); // 0
