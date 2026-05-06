/*
 * Name: Minimum Window Substring
 *
 * Approach: Sliding Window + Frequency Map
 *
 * Input: "ADOBECODEBANC", "ABC"
 *
 * Output: "BANC"
 *
 * Explanation:
 * Expand until valid, shrink to minimize
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Valid window shrinking
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function minWindow(s, t) {
  let need = new Map();
  for (let c of t) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  let left = 0;
  let count = t.length;
  let minLen = Infinity;
  let start = 0;

  for (let right = 0; right < s.length; right++) {
    if (need.has(s[right])) {
      if (need.get(s[right]) > 0) count--;
      need.set(s[right], need.get(s[right]) - 1);
    }

    while (count === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      if (need.has(s[left])) {
        need.set(s[left], need.get(s[left]) + 1);
        if (need.get(s[left]) > 0) count++;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

// Test Cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
console.log(minWindow("a", "a")); // a
