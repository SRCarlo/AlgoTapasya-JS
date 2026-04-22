/*
 * Name: Longest Substring Without Repeating Characters
 *
 * Approach: Sliding Window + Set
 *
 * Input: s = "abcabcbb"
 *
 * Output: 3
 *
 * Explanation:
 * Expand window until duplicate found, then shrink
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Dynamic window adjustment
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
