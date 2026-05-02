/*
 * Name: Longest Substring with At Least K Repeating Characters
 *
 * Approach: Divide and Conquer
 *
 * Input: "aaabb", k = 3
 *
 * Output: 3
 *
 * Explanation:
 * Split around invalid characters
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

  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < k) {
      let left = longestSubstring(s.slice(0, i), k);
      let right = longestSubstring(s.slice(i + 1), k);
      return Math.max(left, right);
    }
  }

  return s.length;
}

// Test Cases
console.log(longestSubstring("aaabb", 3)); // 3
console.log(longestSubstring("ababbc", 2)); // 5
