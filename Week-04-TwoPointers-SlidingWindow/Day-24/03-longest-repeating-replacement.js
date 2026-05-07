/*
 * Name: Longest Repeating Character Replacement
 *
 * Approach: Sliding Window
 *
 * Input: "ABAB", k = 2
 *
 * Output: 4
 *
 * Explanation:
 * Replace up to k chars to make same letters
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Window validity formula
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function characterReplacement(s, k) {
  let frequencyMap = new Map();
  let left = 0;
  let maxFrequency = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    frequencyMap.set(s[right], (frequencyMap.get(s[right]) || 0) + 1);

    maxFrequency = Math.max(maxFrequency, frequencyMap.get(s[right]));

    while (right - left + 1 - maxFrequency > k) {
      frequencyMap.set(s[left], frequencyMap.get(s[left]) - 1);
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

// Test Cases
console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
