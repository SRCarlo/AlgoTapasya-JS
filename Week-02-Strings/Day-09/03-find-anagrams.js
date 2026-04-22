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
 * Maintain window of size p and compare counts
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Fixed-size window
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function findAnagrams(s, p) {
  let result = [];
  let sCount = new Array(26).fill(0);
  let pCount = new Array(26).fill(0);

  for (let char of p) {
    pCount[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    sCount[s.charCodeAt(i) - 97]++;

    if (i >= p.length) {
      sCount[s.charCodeAt(i - p.length) - 97]--;
    }

    if (JSON.stringify(sCount) === JSON.stringify(pCount)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
}

// Test Cases
console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
console.log(findAnagrams("abab", "ab")); // [0,1,2]
