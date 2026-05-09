/*
 * Name: Sliding Window Maximum
 *
 * Approach: Monotonic Deque
 *
 * Input: [1,3,-1,-3,5,3,6,7], k = 3
 *
 * Output: [3,3,5,5,6,7]
 *
 * Explanation:
 * Maintain decreasing deque for max element
 *
 * Algorithm Used: Monotonic Queue
 *
 * Key Learning: Efficient max tracking
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(k)
 */

function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];

  for (let right = 0; right < nums.length; right++) {
    // Remove smaller elements
    while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
      deque.pop();
    }

    deque.push(right);

    // Remove out-of-window index
    if (deque[0] <= right - k) {
      deque.shift();
    }

    // Add max to result
    if (right >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Test Cases
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); //[ 3, 3, 5, 5, 6, 7 ]
console.log(maxSlidingWindow([1], 1)); //[ 1 ]
