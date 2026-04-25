/*
 *
 * Name: Longest Substring with At Least K Repeating Characters
 *
 * Approach: Divide and Conquer
 *
 * Input: s = "aaabb", k = 3
 *
 * Output: 3
 *
 * Explanation:
 * Split string where frequency < k
 *
 * Algorithm Used: Recursion
 *
 * Key Learning: Divide invalid segments
 *
 * Time Complexity: O(n log n)
 *
 * Space Complexity: O(n)
 */

function longestSubstring(s, k) {
  if (s.length === 0) return 0;

  let freq = new Map();
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) < k) {
      let left = longestSubstring(s.substring(0, i), k);
      let right = longestSubstring(s.substring(i + 1), k);
      return Math.max(left, right);
    }
  }

  return s.length;
}

// Test Cases
console.log(longestSubstring("aaabb", 3)); // 3
console.log(longestSubstring("ababbc", 2)); // 5
