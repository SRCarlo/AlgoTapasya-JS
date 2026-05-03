/*
 * Name: Binary Subarrays With Sum
 *
 * Approach: At Most Trick
 *
 * Input: [1,0,1,0,1], goal = 2
 *
 * Output: 4
 *
 * Explanation:
 * exact = atMost(goal) - atMost(goal-1)
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Binary optimization
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function numSubarraysWithSum(nums, goal) {
  return atMost(nums, goal) - atMost(nums, goal - 1);
}

function atMost(nums, goal) {
  let left = 0,
    sum = 0,
    count = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > goal) {
      sum -= nums[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

// Test Cases
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // 4
console.log(numSubarraysWithSum([0, 0, 0, 0], 0)); // 20
