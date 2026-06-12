/*
 * Name: Longest Common Subsequence
 *
 * Approach: Compare characters and build DP table.
 *
 * Input: text1 = "abcde"
 *        text2 = "ace"
 *
 * Output: 3
 *
 * Explanation: Common subsequence: "ace"
 *
 * Algorithm Used: Dynamic Programming
 *
 * Key Learning: Sequence matching DP
 *
 * Time Complexity: O(n × m)
 *
 * Space Complexity: O(n × m)
 */

function longestCommonSubsequence(text1, text2) {
  const rows = text1.length;

  const cols = text2.length;

  const dp = Array(rows + 1)
    .fill()
    .map(() => Array(cols + 1).fill(0));

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[rows][cols];
}

// Input
console.log(longestCommonSubsequence("abcde", "ace")); // 3
