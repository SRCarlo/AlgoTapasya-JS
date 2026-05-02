/*
 * Name: Subarrays with K Distinct Integers
 *
 * Approach: Sliding Window (At Most K Trick)
 *
 * Input: [1,2,1,2,3], k = 2
 *
 * Output: 7
 *
 * Explanation:
 * exactly(k) = atMost(k) - atMost(k-1)
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Problem transformation
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function subarraysWithKDistinct(nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
}

function atMost(nums, k) {
  let map = new Map();
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    while (map.size > k) {
      map.set(nums[left], map.get(nums[left]) - 1);
      if (map.get(nums[left]) === 0) map.delete(nums[left]);
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

// Test Cases
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); // 7
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); // 3
