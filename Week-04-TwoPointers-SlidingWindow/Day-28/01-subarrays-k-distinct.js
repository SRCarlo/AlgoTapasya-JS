/*
 * Name: Subarrays With K Different Integers
 *
 * Approach: Sliding Window + At Most Technique
 *
 * Input: [1,2,1,2,3], k = 2
 *
 * Output: 7
 *
 * Explanation:
 * exactly(k) = atMost(k) - atMost(k - 1)
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Exact distinct transformation
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function subarraysWithKDistinct(nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
}

function atMost(nums, k) {
  const frequencyMap = new Map();

  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    frequencyMap.set(nums[right], (frequencyMap.get(nums[right]) || 0) + 1);

    while (frequencyMap.size > k) {
      frequencyMap.set(nums[left], frequencyMap.get(nums[left]) - 1);

      if (frequencyMap.get(nums[left]) === 0) {
        frequencyMap.delete(nums[left]);
      }

      left++;
    }

    count += right - left + 1;
  }

  return count;
}

// Test Cases
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); // 7
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); // 3
