/*
 * Name: Valid Anagram
 *
 * Approach: Frequency Count
 *
 * Input: s = "anagram", t = "nagaram"
 *
 * Output: true
 *
 * Explanation:
 * Compare character frequencies
 *
 * Algorithm Used: HashMap
 *
 * Key Learning: Pattern matching via counts
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
    if (!map.has(char) || map.get(char) === 0) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }

  return true;
}

// Test Cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
