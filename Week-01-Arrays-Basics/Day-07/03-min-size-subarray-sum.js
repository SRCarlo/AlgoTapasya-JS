/*
 * Name: Minimum Size Subarray Sum
 *
 * Approach: Sliding Window
 *
 * Input: target = 7, nums = [...]
 *
 * Output: 2
 *
 * Explanation:
 * Expand window → shrink when sum ≥ target
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Dynamic window adjustment
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// Test Cases
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
