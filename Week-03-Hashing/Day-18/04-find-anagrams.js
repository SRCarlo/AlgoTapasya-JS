/*
 * Name: Find All Anagrams in a String
 *
 * Approach: Sliding Window + Frequency Array
 *
 * Input: s = "cbaebabacd", p = "abc"
 *
 * Output: [0,6]
 *
 * Explanation:
 * Compare window frequency with pattern
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Fixed window pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function findAnagrams(s, p) {
  let result = [];
  let need = new Array(26).fill(0);
  let window = new Array(26).fill(0);

  for (let char of p) {
    need[char.charCodeAt(0) - 97]++;
  }

  let k = p.length;

  for (let i = 0; i < s.length; i++) {
    window[s[i].charCodeAt(0) - 97]++;

    if (i >= k) {
      window[s[i - k].charCodeAt(0) - 97]--;
    }

    if (JSON.stringify(window) === JSON.stringify(need)) {
      result.push(i - k + 1);
    }
  }

  return result;
}

// Test Cases
console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
console.log(findAnagrams("abab", "ab")); // [0,1,2]
