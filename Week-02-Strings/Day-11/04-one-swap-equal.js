/*
 *
 * Name: Check if Strings Can Be Equal by One Swap
 *
 * Approach: Difference Tracking
 *
 * Input: s1 = "bank", s2 = "kanb"
 *
 * Output: true
 *
 * Explanation:
 * Only two mismatches allowed and should cross-match
 *
 * Algorithm Used: Greedy
 *
 * Key Learning: Constraint validation
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function areAlmostEqual(s1, s2) {
  if (s1.length !== s2.length) return false;

  let diff = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff.push(i);
    }
  }

  if (diff.length === 0) return true;
  if (diff.length !== 2) return false;

  let [i, j] = diff;

  return s1[i] === s2[j] && s1[j] === s2[i];
}

// Test Cases
console.log(areAlmostEqual("bank", "kanb")); // true
console.log(areAlmostEqual("attack", "defend")); // false
