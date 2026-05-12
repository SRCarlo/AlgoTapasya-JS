/*
 * Name: Generate Parentheses
 *
 * Approach: Backtracking
 *
 * Input: n = 3
 *
 * Output: All valid parentheses combinations
 *
 * Explanation: Build only valid combinations recursively
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Decision tree recursion
 *
 * Time Complexity: O(4^n / sqrt(n))
 *
 * Space Complexity: O(n)
 */

function generateParenthesis(n) {
  const result = [];

  function backtrack(current, open, close) {
    // Valid combination completed
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    // Add opening bracket
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // Add closing bracket
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);

  return result;
}

// Test Cases
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
