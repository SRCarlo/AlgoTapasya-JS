/*
 * Name: Split String Into Descending Consecutive Values
 *
 * Approach: Backtracking
 *
 * Input: "54321"
 *
 * Output: true
 *
 * Explanation:
 * Split into descending consecutive numbers
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Recursive partition checking
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(n)
 */

function splitString(s) {
  function dfs(index, previous) {
    // Entire string processed
    if (index === s.length) {
      return true;
    }

    let current = 0;

    for (let end = index; end < s.length; end++) {
      current = current * 10 + Number(s[end]);

      if (current + 1 === previous) {
        if (dfs(end + 1, current)) {
          return true;
        }
      }
    }

    return false;
  }

  let number = 0;

  for (let index = 0; index < s.length - 1; index++) {
    number = number * 10 + Number(s[index]);

    if (dfs(index + 1, number)) {
      return true;
    }
  }

  return false;
}

// Test Cases
console.log(splitString("54321")); // true
console.log(splitString("050043")); // true
console.log(splitString("1234")); // false
