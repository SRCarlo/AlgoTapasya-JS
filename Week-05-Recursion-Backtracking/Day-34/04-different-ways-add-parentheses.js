/*
 * Name: Different Ways to Add Parentheses
 *
 * Approach: Divide and Conquer
 *
 * Input: Expression string
 *
 * Output: All possible results
 *
 * Explanation: Recursively split expression at every operator.
 *
 * Algorithm Used: Recursion + Divide and Conquer
 *
 * Key Learning: Recursive expression partitioning
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(n)
 */

function diffWaysToCompute(expression) {
  const result = [];

  for (let index = 0; index < expression.length; index++) {
    const char = expression[index];

    // Operator found
    if (char === "+" || char === "-" || char === "*") {
      const leftPart = diffWaysToCompute(expression.substring(0, index));

      const rightPart = diffWaysToCompute(expression.substring(index + 1));

      // Combine results
      for (let left of leftPart) {
        for (let right of rightPart) {
          if (char === "+") {
            result.push(left + right);
          }

          if (char === "-") {
            result.push(left - right);
          }

          if (char === "*") {
            result.push(left * right);
          }
        }
      }
    }
  }

  // Pure number
  if (result.length === 0) {
    result.push(Number(expression));
  }

  return result;
}

// Test Cases
console.log(diffWaysToCompute("2*3-4*5")); // [ -34, -10, -14, -10, 10 ]
console.log(diffWaysToCompute("2-1-1")); // [ 2, 0 ]
