/*
 * Name: Word Pattern
 *
 * Approach: HashMap
 *
 * Input: pattern = "abba", s = "dog cat cat dog"
 *
 * Output: true
 *
 * Explanation:
 * Map pattern chars to words
 *
 * Algorithm Used: Hashing
 *
 * Key Learning: Pattern mapping
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function wordPattern(pattern, s) {
  let words = s.split(" ");
  if (pattern.length !== words.length) return false;

  let map = new Map();
  let used = new Set();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (map.has(char)) {
      if (map.get(char) !== word) return false;
    } else {
      if (used.has(word)) return false;
      map.set(char, word);
      used.add(word);
    }
  }

  return true;
}

// Test Cases
console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
