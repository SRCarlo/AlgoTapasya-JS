/*
 * Name: Longest Subarray with Sum K
 *
 * Approach: Prefix Sum + Hash Map
 *
 * Input: nums = [1,2,3,1,1,1,1], k = 3
 *
 * Output: 3
 *
 * Explanation:
 * Track cumulative sum and store first occurrence index
 *
 * Algorithm Used: Prefix Sum + HashMap
 *
 * Key Learning: Length-based subarray tracking
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function longestSubarray(nums, k) {
  let map = new Map();
  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      maxLength = i + 1;
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }

    if (map.has(sum - k)) {
      maxLength = Math.max(maxLength, i - map.get(sum - k));
    }
  }

  return maxLength;
}

// Test Cases
console.log(longestSubarray([1, 2, 3, 1, 1, 1, 1], 3)); // 3
console.log(longestSubarray([1, 2, 3], 6)); // 3
