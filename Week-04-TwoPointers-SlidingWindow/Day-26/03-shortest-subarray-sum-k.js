/*
 * Name: Shortest Subarray With Sum At Least K
 *
 * Approach: Prefix Sum + Monotonic Deque
 *
 * Input: [2,-1,2], k = 3
 *
 * Output: 3
 *
 * Explanation:
 * Use prefix sums to track valid ranges
 *
 * Algorithm Used: Prefix Sum + Deque
 *
 * Key Learning: Negative numbers break normal window
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function shortestSubarray(nums, k) {
  const prefix = [0];

  for (let num of nums) {
    prefix.push(prefix[prefix.length - 1] + num);
  }

  const deque = [];
  let shortest = Infinity;

  for (let i = 0; i < prefix.length; i++) {
    while (deque.length && prefix[i] - prefix[deque[0]] >= k) {
      shortest = Math.min(shortest, i - deque.shift());
    }

    while (deque.length && prefix[i] <= prefix[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(i);
  }

  return shortest === Infinity ? -1 : shortest;
}

// Test Cases
console.log(shortestSubarray([2, -1, 2], 3)); // 3
console.log(shortestSubarray([1, 2], 4)); // -1
