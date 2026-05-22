/*
 * Name: Valid Parentheses
 *
 * Approach: Stack Matching
 *
 * Input: "()[]{}"
 *
 * Output: true
 *
 * Explanation: Every opening bracket must close correctly.
 *
 * Algorithm Used: Stack
 *
 * Key Learning: LIFO matching pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function isValid(string) {
  const stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let character of string) {
    // Opening bracket
    if (character === "(" || character === "[" || character === "{") {
      stack.push(character);
    } else {
      // Invalid match
      if (stack.pop() !== pairs[character]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test Cases
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
