/*
 * Name: Palindromic Substrings
 *
 * Approach: Expand around center.
 *
 * Input: "aaa"
 *
 * Output: 6
 *
 * Algorithm Used: Expand Around Center
 *
 * Key Learning: String DP Pattern
 *
 * Time Complexity: O(n²)
 *
 * Space Complexity: O(1)
 */

function countSubstrings(s) {
  let count = 0;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;

      left--;

      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i);

    expand(i, i + 1);
  }

  return count;
}

// Input
console.log(countSubstrings("aaa")); // 6
