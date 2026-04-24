/*
 * Name: Longest Common Prefix
 *
 * Approach: Vertical Scanning
 *
 * Input: ["flower","flow","flight"]
 *
 * Output: "fl"
 *
 * Explanation:
 * Compare characters column-wise
 *
 * Algorithm Used: String Traversal
 *
 * Key Learning: Early stopping
 *
 * Time Complexity: O(n * m)
 *
 * Space Complexity: O(1)
 *
 */

function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
}

// Test Cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
