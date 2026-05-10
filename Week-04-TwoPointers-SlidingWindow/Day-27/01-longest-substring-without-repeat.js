/*
 * Name: Longest Substring Without Repeating Characters
 *
 * Approach: Sliding Window + Set
 *
 * Input: "abcabcbb"
 *
 * Output: 3
 *
 * Explanation:
 *
 * Maintain unique characters inside window
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Duplicate removal pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function lengthOfLongestSubstring(s) {
  const characterSet = new Set();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (characterSet.has(s[right])) {
      characterSet.delete(s[left]);
      left++;
    }

    characterSet.add(s[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
