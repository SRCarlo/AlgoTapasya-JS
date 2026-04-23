/*
 * Name: Longest Palindromic
 *
 * Approach: Expand Around Center
 *
 * Input: s = "babad"
 *
 * Output: "bab"
 *
 * Explanation:
 * Expand from each index (odd + even center)
 *
 * Algorithm Used: Two Pointer Expansion
 *
 * Key Learning: Center expansion pattern
 *
 * Time Complexity: O(n^2)
 *
 * Space Complexity: O(1)
 *
 */

function longestPalindrome(s) {
  if (!s) return "";

  let start = 0,
    end = 0;

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    let len1 = expand(i, i);
    let len2 = expand(i, i + 1);
    let maxLen = Math.max(len1, len2);

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }

  return s.substring(start, end + 1);
}

// Test Cases
console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
