/*
 * Name: Longest Continuous Subarray
 *
 * Approach: Monotonic Deque
 *
 * Input: [8,2,4,7], limit = 4
 *
 * Output: 2
 *
 * Explanation:
 * Maintain min and max deques
 *
 * Algorithm Used: Sliding Window + Deque
 *
 * Key Learning: Dual monotonic queues
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function longestSubarray(nums, limit) {
  const maxDeque = [];
  const minDeque = [];

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    while (
      maxDeque.length &&
      nums[maxDeque[maxDeque.length - 1]] < nums[right]
    ) {
      maxDeque.pop();
    }

    while (
      minDeque.length &&
      nums[minDeque[minDeque.length - 1]] > nums[right]
    ) {
      minDeque.pop();
    }

    maxDeque.push(right);
    minDeque.push(right);

    while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
      if (maxDeque[0] === left) {
        maxDeque.shift();
      }

      if (minDeque[0] === left) {
        minDeque.shift();
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test Cases
console.log(longestSubarray([8, 2, 4, 7], 4)); // 2
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5)); // 4
