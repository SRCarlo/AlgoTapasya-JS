/*
 * Name: Maximum Number of Balloons
 *
 * Approach: Frequency Count
 *
 * Input: "loonbalxballpoon"
 *
 * Output: 2
 *
 * Explanation:
 * Count frequency and divide required chars
 *
 * Algorithm Used: HashMap
 *
 * Key Learning: Resource limiting pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function maxNumberOfBalloons(text) {
  let map = new Map();

  for (let char of text) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return Math.min(
    map.get("b") || 0,
    map.get("a") || 0,
    Math.floor((map.get("l") || 0) / 2),
    Math.floor((map.get("o") || 0) / 2),
    map.get("n") || 0,
  );
}

// Test Cases
console.log(maxNumberOfBalloons("loonbalxballpoon")); // 2
console.log(maxNumberOfBalloons("balloon")); // 1
