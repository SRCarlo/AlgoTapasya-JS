/*
 *
 * Name: Longest Substring with At Most K Distinct Characters
 *
 * Approach: Sliding Window + HashMap
 *
 * Input: s = "eceba", k = 2
 *
 * Output: 3
 *
 * Explanation:
 * Expand window, shrink when distinct > k
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Track distinct count dynamically
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(k)
 */

function lengthOfLongestSubstringKDistinct(s, k) {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test Cases
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // 3
console.log(lengthOfLongestSubstringKDistinct("aa", 1)); // 2
