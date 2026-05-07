/*
 * Name: Number of Substrings Containing All Three Characters
 *
 * Approach: Sliding Window
 *
 * Input: "abcabc"
 *
 * Output: 10
 *
 * Explanation:
 * Count valid substrings dynamically
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Counting windows
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function numberOfSubstrings(s) {
  let count = { a: 0, b: 0, c: 0 };

  let left = 0;
  let total = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]]++;

    while (count.a > 0 && count.b > 0 && count.c > 0) {
      total += s.length - right;

      count[s[left]]--;
      left++;
    }
  }

  return total;
}

// Test Cases
console.log(numberOfSubstrings("abcabc")); // 10
console.log(numberOfSubstrings("aaacb")); // 3
