/*
 * Name: Valid Anagram
 *
 * Approach: Frequency Count using HashMap
 *
 * Input: s = "anagram", t = "nagaram"
 *
 * Output: true
 *
 * Explanation:
 * Count characters in s and decrement using t
 *
 * Algorithm Used: Hashing
 *
 * Key Learning: Frequency comparison
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char)) return false;

    map.set(char, map.get(char) - 1);
    if (map.get(char) === 0) map.delete(char);
  }

  return map.size === 0;
}

// Test Cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
