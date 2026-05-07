/*
 * Name: Frequency of the Most Frequent Element
 *
 * Approach: Sorting + Sliding Window
 *
 * Input: [1,2,4], k = 5
 *
 * Output: 3
 *
 * Explanation:
 * Increase smaller values using k operations
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Window cost formula
 *
 * Time Complexity: O(n log n)
 *
 * Space Complexity: O(1)
 */

function maxFrequency(nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let totalSum = 0;
  let maxFreq = 0;

  for (let right = 0; right < nums.length; right++) {
    totalSum += nums[right];

    while (nums[right] * (right - left + 1) - totalSum > k) {
      totalSum -= nums[left];
      left++;
    }

    maxFreq = Math.max(maxFreq, right - left + 1);
  }

  return maxFreq;
}

// Test Cases
console.log(maxFrequency([1, 2, 4], 5)); // 3
console.log(maxFrequency([1, 4, 8, 13], 5)); // 2
