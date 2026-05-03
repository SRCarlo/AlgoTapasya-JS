/*
 * Name: Longest Substring with Exactly K Unique Characters
 *
 * Approach: Sliding Window
 *
 * Input: "aabacbebebe", k = 3
 *
 * Output: 7
 *
 * Explanation:
 * Maintain exactly k distinct chars
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Exact window control
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(k)
 */

function longestKUnique(s, k) {
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

    if (map.size === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }

  return maxLen;
}

// Test Cases
console.log(longestKUnique("aabacbebebe", 3)); // 7
console.log(longestKUnique("aaaa", 1)); // 4
