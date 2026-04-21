/*
 * Name: First Unique Character in String
 *
 * Approach: Frequency Map
 *
 * Input: s = "leetcode"
 *
 * Output: 0
 *
 * Explanation:
 * Count occurrences, then find first with count = 1
 *
 * Algorithm Used: HashMap
 *
 * Key Learning: Two-pass frequency pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function firstUniqChar(s) {
  let map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }

  return -1;
}

// Test Cases
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("aabb")); // -1
