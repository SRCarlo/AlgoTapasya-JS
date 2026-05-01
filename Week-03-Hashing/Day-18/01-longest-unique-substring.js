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
 * Expand window until duplicate found, then shrink
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Duplicate handling
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
