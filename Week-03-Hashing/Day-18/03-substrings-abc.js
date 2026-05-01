/*
 * Name: Number of Substrings Containing All Three Characters
 *
 * Approach: Sliding Window + Counting
 *
 * Input: "abcabc"
 *
 * Output: 10
 *
 * Explanation:
 * Once valid, add remaining substrings
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Count optimization trick
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function numberOfSubstrings(s) {
  let map = { a: 0, b: 0, c: 0 };
  let left = 0;
  let count = 0;

  for (let right = 0; right < s.length; right++) {
    map[s[right]]++;

    while (map["a"] && map["b"] && map["c"]) {
      count += s.length - right;

      map[s[left]]--;
      left++;
    }
  }

  return count;
}

// Test Cases
console.log(numberOfSubstrings("abcabc")); // 10
console.log(numberOfSubstrings("aaacb")); // 3
