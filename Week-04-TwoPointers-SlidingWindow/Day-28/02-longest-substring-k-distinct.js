/*
 * Name: Longest Substring With At Most K Distinct Characters
 *
 * Approach: Sliding Window + HashMap
 *
 * Input: "eceba", k = 2
 *
 * Output: 3
 *
 * Explanation:
 * Maintain at most k distinct chars
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Distinct constraint handling
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(k)
 */

function lengthOfLongestSubstringKDistinct(s, k) {
  const frequencyMap = new Map();

  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    frequencyMap.set(s[right], (frequencyMap.get(s[right]) || 0) + 1);

    while (frequencyMap.size > k) {
      frequencyMap.set(s[left], frequencyMap.get(s[left]) - 1);

      if (frequencyMap.get(s[left]) === 0) {
        frequencyMap.delete(s[left]);
      }

      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

// Test Cases
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // 3
console.log(lengthOfLongestSubstringKDistinct("aa", 1)); // 2
