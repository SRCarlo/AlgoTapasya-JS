/*
 * Name: Combination Sum III
 *
 * Approach: Backtracking
 *
 * Input:k = 3
 *  n = 7
 *
 * Output: [[1,2,4]]
 *
 * Explanation: Choose unique numbers from 1-9 ,whose sum equals target.
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Combination generation
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(k)
 */

function combinationSum3(k, n) {
  const result = [];

  function backtrack(start, current, remaining) {
    // Valid combination
    if (current.length === k && remaining === 0) {
      result.push([...current]);
      return;
    }

    // Invalid state
    if (current.length > k || remaining < 0) {
      return;
    }

    for (let number = start; number <= 9; number++) {
      // Choose
      current.push(number);

      // Explore
      backtrack(number + 1, current, remaining - number);

      // Undo
      current.pop();
    }
  }

  backtrack(1, [], n);

  return result;
}

// Test Cases
console.log(combinationSum3(3, 7)); // [ [ 1, 2, 4 ] ]
console.log(combinationSum3(3, 9)); // [ [ 1, 2, 6 ], [ 1, 3, 5 ], [ 2, 3, 4 ] ]
