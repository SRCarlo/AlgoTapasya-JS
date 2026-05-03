/*
 * Name: Subarray Sum Equals K
 *
 * Approach: Prefix Sum + HashMap
 *
 * Input: [1,1,1], k = 2
 *
 * Output: 2
 *
 * Explanation:
 * Count occurrences of (sum - k)
 *
 * Algorithm Used: Prefix Sum
 *
 * Key Learning: Counting pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function subarraySum(nums, k) {
  let map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

// Test Cases
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
