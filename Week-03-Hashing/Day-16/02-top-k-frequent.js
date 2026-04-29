/*
 * Name: Top K Frequent Elements
 *
 * Approach: Bucket Sort
 *
 * Input: [1,1,1,2,2,3], k = 2
 *
 * Output: [1,2]
 *
 * Explanation:
 * Group elements by frequency
 *
 * Algorithm Used: Bucket Sort
 *
 * Key Learning: Frequency grouping
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function topKFrequent(nums, k) {
  let freqMap = new Map();
  let buckets = Array(nums.length + 1) .fill(null) .map(() => []);

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  let result = [];

  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (let num of buckets[i]) {
      result.push(num);
    }
  }

  return result;
}

// Test Cases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
