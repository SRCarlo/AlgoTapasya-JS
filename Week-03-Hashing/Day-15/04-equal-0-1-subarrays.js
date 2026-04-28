/*
 *
 * Name: Count Subarrays with Equal 0s and 1s
 *
 * Approach: Prefix Sum Transformation
 *
 * Input: [0,1,0,1]
 *
 * Output: 4
 *
 * Explanation:
 * Convert 0 → -1, then find subarray sum = 0
 *
 * Algorithm Used: Prefix Sum
 *
 * Key Learning: Problem transformation
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function countEqual01(nums) {
  let map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num === 0 ? -1 : 1;

    if (map.has(sum)) {
      count += map.get(sum);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

// Test Cases
console.log(countEqual01([0, 1, 0, 1])); // 4
console.log(countEqual01([0, 0, 1, 1])); // 4
