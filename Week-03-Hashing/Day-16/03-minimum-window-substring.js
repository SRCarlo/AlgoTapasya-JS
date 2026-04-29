/*
 * Name: Minimum Window Substring
 *
 * Approach: Sliding Window + HashMap
 *
 * Input: s = "ADOBECODEBANC", t = "ABC"
 *
 * Output: "BANC"
 *
 * Explanation:
 * Expand → valid → shrink to minimum
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Minimum valid window
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function minWindow(s, t) {
  let map = new Map();
  for (let c of t) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  let left = 0,
    count = t.length;
  let minLen = Infinity,
    start = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      if (map.get(s[right]) > 0) count--;
      map.set(s[right], map.get(s[right]) - 1);
    }

    while (count === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      if (map.has(s[left])) {
        map.set(s[left], map.get(s[left]) + 1);
        if (map.get(s[left]) > 0) count++;
      }

      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

// Test Cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
