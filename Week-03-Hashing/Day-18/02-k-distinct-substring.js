/*
 * Name: Longest Substring with At Most K Distinct Characters
 *
 * Approach: Sliding Window + HashMap
 *
 * Input: "eceba", k = 2
 *
 * Output: 3
 *
 * Explanation:
 * Maintain window with ≤ k distinct chars
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Distinct count control
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(k)
 */

function longestKDistinct(s, k) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Test Cases
console.log(longestKDistinct("eceba", 2)); // 3
console.log(longestKDistinct("aa", 1)); // 2
