/*
 * Name: Longest Subarray with Sum K
 *
 * Approach: Prefix Sum + HashMap
 *
 * Input: [1,2,3,1,1,1,1], k = 3
 *
 * Output: 3
 *
 * Explanation:
 * Store prefix sum index
 *
 * Algorithm Used: Prefix Sum
 *
 * Key Learning: First occurrence matters
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function longestSubarraySumK(nums, k) {
  let map = new Map();
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      maxLen = i + 1;
    }

    if (map.has(sum - k)) {
      maxLen = Math.max(maxLen, i - map.get(sum - k));
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLen;
}

// Test Cases
console.log(longestSubarraySumK([1, 2, 3, 1, 1, 1, 1], 3)); // 3
console.log(longestSubarraySumK([1, -1, 5, -2, 3], 3)); // 4
