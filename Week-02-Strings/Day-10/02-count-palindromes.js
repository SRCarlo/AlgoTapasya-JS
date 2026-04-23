/*
 * Name: Count Palindromic Substrings
 *
 * Approach: Expand Around Center
 *
 * Input: s = "aaa"
 *
 * Output: 6
 *
 * Explanation:
 * Each expansion gives valid palindrome count
 *
 * Algorithm Used: Two Pointer Expansion
 *
 * Key Learning: Counting via expansion
 *
 * Time Complexity: O(n^2)
 *
 * Space Complexity: O(1)
 */

function countSubstrings(s) {
  let count = 0;

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  return count;
}

// Test Cases
console.log(countSubstrings("aaa")); // 6
console.log(countSubstrings("abc")); // 3
