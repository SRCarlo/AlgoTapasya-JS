/*
 *
 * Name: Permutation in String
 *
 * Approach: Sliding Window + Frequency Array
 *
 * Input: s1 = "ab", s2 = "eidbaooo"
 *
 * Output: true
 *
 * Explanation:
 * Compare frequency of fixed-size window
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Pattern matching in substring
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function checkInclusion(s1, s2) {
  let need = new Array(26).fill(0);
  let window = new Array(26).fill(0);

  for (let char of s1) {
    need[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    window[s2.charCodeAt(i) - 97]++;

    if (i >= s1.length) {
      window[s2.charCodeAt(i - s1.length) - 97]--;
    }

    if (JSON.stringify(window) === JSON.stringify(need)) {
      return true;
    }
  }

  return false;
}

// Test Cases
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
