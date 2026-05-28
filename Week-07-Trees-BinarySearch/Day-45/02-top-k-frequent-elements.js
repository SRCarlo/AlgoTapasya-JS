/*
 * Name: Top K Frequent Elements
 *
 * Approach: Frequency Map
 *
 * Input: nums = [1,1,1,2,2,3] k = 2
 *
 * Output: [1,2]
 *
 * Explanation: Return most frequent values.
 *
 * Algorithm Used: Hash Map + Sorting
 *
 * Key Learning: Frequency counting
 *
 * Time Complexity: O(n log n)
 *
 * Space Complexity: O(n)
 */

function topKFrequent(nums, k) {
  const frequencyMap = new Map();

  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  return [...frequencyMap.keys()]
    .sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a))
    .slice(0, k);
}

// Test Case
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
