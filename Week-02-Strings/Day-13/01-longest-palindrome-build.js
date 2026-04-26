/*
 * Name: Longest Palindrome (Buildable)
 *
 * Approach: Frequency Count
 *
 * Input: s = "abccccdd"
 *
 * Output: 7
 *
 * Explanation:
 * Use pairs fully, allow one odd in center
 *
 * Algorithm Used: HashMap
 *
 * Key Learning: Pair + single center logic
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function longestPalindromeBuild(s) {
  let set = new Set();
  let length = 0;

  for (let char of s) {
    if (set.has(char)) {
      set.delete(char);
      length += 2;
    } else {
      set.add(char);
    }
  }

  return set.size > 0 ? length + 1 : length;
}

// Test Cases
console.log(longestPalindromeBuild("abccccdd")); // 7
console.log(longestPalindromeBuild("a")); // 1
