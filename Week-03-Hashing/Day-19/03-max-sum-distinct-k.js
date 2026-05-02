/*
 * Name: Maximum Sum of Distinct Subarray of Size K
 *
 * Approach: Sliding Window + Set
 *
 * Input: [1,5,4,2,9,9,9], k = 3
 *
 * Output: 15
 *
 * Explanation:
 * Maintain distinct elements and sum
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Distinct + sum tracking
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(k)
 */

function maximumSubarraySum(nums, k) {
  let set = new Set();
  let left = 0;
  let sum = 0;
  let maxSum = 0;

  for (let right = 0; right < nums.length; right++) {
    while (set.has(nums[right])) {
      set.delete(nums[left]);
      sum -= nums[left];
      left++;
    }

    set.add(nums[right]);
    sum += nums[right];

    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, sum);
      set.delete(nums[left]);
      sum -= nums[left];
      left++;
    }
  }

  return maxSum;
}

// Test Cases
console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)); // 15
console.log(maximumSubarraySum([4, 4, 4], 3)); // 0
