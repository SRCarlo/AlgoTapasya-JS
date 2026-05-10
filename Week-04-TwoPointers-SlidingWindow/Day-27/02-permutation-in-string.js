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
 * Check if any window matches permutation
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Fixed window frequency comparison
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const target = Array(26).fill(0);
  const window = Array(26).fill(0);

  for (let char of s1) {
    target[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    window[s2.charCodeAt(i) - 97]++;

    if (i >= s1.length) {
      window[s2.charCodeAt(i - s1.length) - 97]--;
    }

    if (arraysEqual(target, window)) {
      return true;
    }
  }

  return false;
}

function arraysEqual(first, second) {
  for (let i = 0; i < 26; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}

// Test Cases
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
