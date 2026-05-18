/**
 * Name: Remove Invalid Parentheses
 *
 * Approach: BFS + Backtracking
 *
 * Input: Parentheses string
 *
 * Output: Valid expressions
 *
 * Explanation: Remove minimum invalid parentheses.
 *
 * Algorithm Used: BFS
 *
 * Key Learning: Expression validation search
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(n)
 */

function removeInvalidParentheses(s) {
  const result = [];

  const visited = new Set();

  const queue = [s];

  visited.add(s);

  let found = false;

  // Validate expression
  function isValid(string) {
    let balance = 0;

    for (let char of string) {
      if (char === "(") {
        balance++;
      }

      if (char === ")") {
        balance--;

        if (balance < 0) {
          return false;
        }
      }
    }

    return balance === 0;
  }

  while (queue.length > 0) {
    const current = queue.shift();

    // Valid expression found
    if (isValid(current)) {
      result.push(current);

      found = true;
    }

    // Stop deeper levels
    if (found) {
      continue;
    }

    for (let index = 0; index < current.length; index++) {
      // Skip non-parentheses
      if (current[index] !== "(" && current[index] !== ")") {
        continue;
      }

      const next = current.slice(0, index) + current.slice(index + 1);

      if (!visited.has(next)) {
        visited.add(next);

        queue.push(next);
      }
    }
  }

  return result;
}

// Test Case
console.log(removeInvalidParentheses("()())()")); // [ '(())()', '()()()' ]
