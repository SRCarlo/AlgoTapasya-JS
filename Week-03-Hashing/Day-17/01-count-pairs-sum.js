/*
 * Name: Count Pairs with Given Sum
 *
 * Approach: HashMap
 *
 * Input: nums = [1,5,7,-1,5], k = 6
 *
 * Output: 3
 *
 * Explanation:
 * For each num, check k - num in map
 *
 * Algorithm Used: Complement Hashing
 *
 * Key Learning: Pair counting pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function countPairs(nums, k) {
  let map = new Map();
  let count = 0;

  for (let num of nums) {
    if (map.has(k - num)) {
      count += map.get(k - num);
    }

    map.set(num, (map.get(num) || 0) + 1);
  }

  return count;
}

// Test Cases
console.log(countPairs([1, 5, 7, -1, 5], 6)); // 3
console.log(countPairs([1, 1, 1, 1], 2)); // 6
