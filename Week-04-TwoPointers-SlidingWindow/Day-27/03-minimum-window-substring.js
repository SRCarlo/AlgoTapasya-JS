/*
 * Name: Minimum Window Substring
 *
 * Approach: Sliding Window + Hash Map
 *
 * Input: "ADOBECODEBANC", "ABC"
 *
 * Output: "BANC"
 *
 * Explanation:
 * Find smallest valid substring containing all chars
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Valid window tracking
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function minWindow(s, t) {
  const frequencyMap = new Map();

  for (let char of t) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  let required = t.length;
  let left = 0;

  let minLength = Infinity;
  let startIndex = 0;

  for (let right = 0; right < s.length; right++) {
    if (frequencyMap.has(s[right])) {
      if (frequencyMap.get(s[right]) > 0) {
        required--;
      }

      frequencyMap.set(s[right], frequencyMap.get(s[right]) - 1);
    }

    while (required === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        startIndex = left;
      }

      if (frequencyMap.has(s[left])) {
        frequencyMap.set(s[left], frequencyMap.get(s[left]) + 1);

        if (frequencyMap.get(s[left]) > 0) {
          required++;
        }
      }

      left++;
    }
  }

  return minLength === Infinity
    ? ""
    : s.substring(startIndex, startIndex + minLength);
}

// Test Cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
console.log(minWindow("a", "a")); // a
console.log(minWindow("a", "aa")); // ""
