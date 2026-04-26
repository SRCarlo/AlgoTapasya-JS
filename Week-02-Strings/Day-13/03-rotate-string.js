/*
 * Name: Check if Strings are Rotations
 *
 * Approach: String Trick
 *
 * Input: s = "abcde", goal = "cdeab"
 *
 * Output: true
 *
 * Explanation:
 * goal must be substring of s + s
 *
 * Algorithm Used: String Matching
 *
 * Key Learning: Rotation trick
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function rotateString(s, goal) {
  if (s.length !== goal.length) return false;
  return (s + s).includes(goal);
}

// Test Cases
console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abc", "acb")); // false
