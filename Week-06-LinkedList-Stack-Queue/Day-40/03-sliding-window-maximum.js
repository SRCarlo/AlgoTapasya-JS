/*
 * Name: Sliding Window Maximum
 *
 * Approach: Monotonic Deque
 *
 * Input:
 * nums = [1,3,-1,-3,5,3,6,7] k = 3
 *
 * Output: [3,3,5,5,6,7]
 *
 * Explanation: Find maximum element in every window.
 *
 * Algorithm Used: Monotonic Queue
 *
 * Key Learning: Deque optimization
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(k)
 */

function maxSlidingWindow(nums, k) {
  const deque = [];

  const result = [];

  for (let index = 0; index < nums.length; index++) {
    // Remove out-of-window
    if (deque.length > 0 && deque[0] <= index - k) {
      deque.shift();
    }

    // Maintain decreasing deque
    while (deque.length > 0 && nums[index] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(index);

    // Store maximum
    if (index >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Test Case
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [ 3, 3, 5, 5, 6, 7 ]
