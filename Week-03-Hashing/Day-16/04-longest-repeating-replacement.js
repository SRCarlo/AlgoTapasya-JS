/*
 *
 * Name: Longest Repeating Character Replacement
 *
 * Approach: Sliding Window
 *
 * Input: s = "AABABBA", k = 1
 *
 * Output: 4
 *
 * Explanation:
 * Replace k chars to make all same
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Window validity formula
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function characterReplacement(s, k) {
  let map = new Map();
  let left = 0;
  let maxFreq = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    maxFreq = Math.max(maxFreq, map.get(s[right]));

    while (right - left + 1 - maxFreq > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Test Cases
console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("ABAB", 2)); // 4
