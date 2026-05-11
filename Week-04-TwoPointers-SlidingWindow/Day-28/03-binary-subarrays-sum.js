/*
 * Name: Binary Subarrays With Sum
 *
 * Approach: Sliding Window
 *
 * Input: [1,0,1,0,1], goal = 2
 *
 * Output: 4
 *
 * Explanation:
 * Count exact goal using atMost trick
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Exact sum transformation
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function numSubarraysWithSum(nums, goal) {
  return atMostSum(nums, goal) - atMostSum(nums, goal - 1);
}

function atMostSum(nums, goal) {
  if (goal < 0) {
    return 0;
  }

  let left = 0;
  let count = 0;
  let currentSum = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum > goal) {
      currentSum -= nums[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

// Test Cases
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // 4
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // 15
