/**
 * Name: Maximum Length Unique Concatenation
 *
 * Approach: Backtracking
 *
 * Input: String array
 *
 * Output: Maximum valid length
 *
 * Explanation: Concatenate strings with all unique characters.
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning: Character set pruning
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(n)
 */

function maxLength(arr) {
  let maximum = 0;

  function hasUniqueCharacters(string) {
    return new Set(string).size === string.length;
  }

  function dfs(index, current) {
    // Invalid concatenation
    if (!hasUniqueCharacters(current)) {
      return;
    }

    maximum = Math.max(maximum, current.length);

    for (let next = index; next < arr.length; next++) {
      dfs(next + 1, current + arr[next]);
    }
  }

  dfs(0, "");

  return maximum;
}

// Test Cases
console.log(maxLength(["un", "iq", "ue"])); // 4
console.log(maxLength(["cha", "r", "act", "ers"])); // 6
