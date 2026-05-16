/*
 * Name: Expression Add Operators
 *
 * Approach: DFS Backtracking
 *
 * Input:
 * num = "123"
 * target = 6
 *
 * Output:
 * ["1+2+3", "1*2*3"]
 *
 * Explanation:Insert operators recursively and evaluate expressions.
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning: Expression recursion
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(n)
 */

function addOperators(num, target) {
  const result = [];

  function dfs(index, expression, currentValue, previousValue) {
    // Entire string processed
    if (index === num.length) {
      if (currentValue === target) {
        result.push(expression);
      }

      return;
    }

    for (let end = index; end < num.length; end++) {
      // Prevent leading zeros
      if (end > index && num[index] === "0") {
        break;
      }

      const currentString = num.substring(index, end + 1);

      const currentNumber = Number(currentString);

      // First number
      if (index === 0) {
        dfs(end + 1, currentString, currentNumber, currentNumber);
      } else {
        // Addition
        dfs(
          end + 1,
          expression + "+" + currentString,
          currentValue + currentNumber,
          currentNumber,
        );

        // Subtraction
        dfs(
          end + 1,
          expression + "-" + currentString,
          currentValue - currentNumber,
          -currentNumber,
        );

        // Multiplication
        dfs(
          end + 1,
          expression + "*" + currentString,
          currentValue - previousValue + previousValue * currentNumber,
          previousValue * currentNumber,
        );
      }
    }
  }

  dfs(0, "", 0, 0);

  return result;
}

// Test Cases
console.log(addOperators("123", 6)); // [ '1+2+3', '1*2*3' ]
console.log(addOperators("232", 8)); // [ '2+3*2', '2*3+2' ]
