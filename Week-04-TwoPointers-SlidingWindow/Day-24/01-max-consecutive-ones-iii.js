/*
 * Name: Max Consecutive Ones III
 *
 * Approach: Sliding Window
 *
 * Input: [1,1,1,0,0,0,1,1,1,1,0], k = 2
 *
 * Output: 6
 *
 * Explanation:
 * Keep at most k zeros in window
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Constraint-based shrinking
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function longestOnes(nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test Cases
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(longestOnes([0, 0, 1, 1, 1, 0, 0], 0)); // 3
