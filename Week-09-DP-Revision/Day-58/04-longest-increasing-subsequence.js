/*
 * Name: Longest Increasing Subsequence
 *
 * Approach: DP stores best answer ending at index i.
 *
 * Input: [10,9,2,5,3,7,101,18]
 *
 * Output: 4
 *
 * Explanation: [2,3,7,101]
 *
 * Algorithm Used: Dynamic Programming
 *
 * Key Learning: Sequence Optimization
 *
 * Time Complexity: O(n²)
 *
 * Space Complexity: O(n)
 */

function lengthOfLIS(nums) {
  const dp = Array(nums.length).fill(1);

  let answer = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    answer = Math.max(answer, dp[i]);
  }

  return answer;
}

// Input
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
