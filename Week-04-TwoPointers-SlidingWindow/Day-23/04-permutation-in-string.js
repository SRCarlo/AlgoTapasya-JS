/*
 * Name: Permutation in String
 *
 * Approach: Sliding Window + Frequency Array
 *
 * Input: "ab", "eidbaooo"
 *
 * Output: true
 *
 * Explanation:
 * Check if window matches frequency
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Fixed window pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function checkInclusion(s1, s2) {
  let need = Array(26).fill(0);
  let window = Array(26).fill(0);

  for (let c of s1) need[c.charCodeAt(0) - 97]++;

  let k = s1.length;

  for (let i = 0; i < s2.length; i++) {
    window[s2.charCodeAt(i) - 97]++;

    if (i >= k) {
      window[s2.charCodeAt(i - k) - 97]--;
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
