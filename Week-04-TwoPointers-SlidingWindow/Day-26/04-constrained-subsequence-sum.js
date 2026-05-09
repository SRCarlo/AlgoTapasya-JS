/*
 * Name: Constrained Subsequence Sum
 *
 * Approach: DP + Monotonic Deque
 *
 * Input: [10,2,-10,5,20], k = 2
 *
 * Output: 37
 *
 * Explanation:
 * Keep best DP values inside window
 *
 * Algorithm Used: Dynamic Programming + Deque
 *
 * Key Learning: DP optimization
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function constrainedSubsetSum(nums, k) {
  const deque = [];
  const dp = Array(nums.length).fill(0);

  let answer = nums[0];

  for (let i = 0; i < nums.length; i++) {
    dp[i] = nums[i];

    if (deque.length) {
      dp[i] = Math.max(dp[i], nums[i] + dp[deque[0]]);
    }

    while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
      deque.pop();
    }

    if (dp[i] > 0) {
      deque.push(i);
    }

    if (deque[0] <= i - k) {
      deque.shift();
    }

    answer = Math.max(answer, dp[i]);
  }

  return answer;
}

// Test Cases
console.log(constrainedSubsetSum([10, 2, -10, 5, 20], 2)); // 37
console.log(constrainedSubsetSum([-1, -2, -3], 1)); // -1
