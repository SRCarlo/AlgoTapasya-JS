/*
 *
 * Name: Longest Subarray with Sum K
 *
 * Approach: Prefix Sum + HashMap
 *
 * Input: [1,2,3,1,1,1,1], k = 3
 *
 * Output: 3
 *
 * Explanation:
 *
 * Store first index of prefixSum
 *
 * Algorithm Used: Prefix Sum
 *
 * Key Learning: Max length using earliest index
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function longestSubarray(nums, k) {
  let map = new Map();
  map.set(0, -1);

  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

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
console.log(longestSubarray([1, 2, 3, 1, 1, 1, 1], 3)); // 3
console.log(longestSubarray([1, 2, 1, 0, 1], 3)); // 4
