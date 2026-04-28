/*
 *
 * Name: Continuous Subarray Sum (Multiple of K)
 *
 * Approach: Prefix Sum + Modulo
 *
 * Input: nums = [23,2,4,6,7], k = 6
 *
 * Output: true
 *
 * Explanation:
 * Same remainder means subarray divisible by k
 *
 * Algorithm Used: Modulo Hashing
 *
 * Key Learning: remainder matching pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function checkSubarraySum(nums, k) {
  let map = new Map();
  map.set(0, -1);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let mod = sum % k;

    if (map.has(mod)) {
      if (i - map.get(mod) > 1) return true;
    } else {
      map.set(mod, i);
    }
  }

  return false;
}

// Test Cases
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)); // true
console.log(checkSubarraySum([1, 2, 3], 5)); // false
