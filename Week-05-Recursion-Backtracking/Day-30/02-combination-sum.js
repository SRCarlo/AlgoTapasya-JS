/*
 * Name: Combination Sum
 *
 * Approach: Backtracking
 *
 * Input: [2,3,6,7], target = 7
 *
 * Output: Valid combinations
 *
 * Explanation:
 * Reuse elements until target becomes zero
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Recursive sum exploration
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(target)
 */

function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, currentCombination, remaining) {
    // Valid combination found
    if (remaining === 0) {
      result.push([...currentCombination]);
      return;
    }

    // Invalid path
    if (remaining < 0) {
      return;
    }

    for (let index = start; index < candidates.length; index++) {
      // Choose
      currentCombination.push(candidates[index]);

      // Explore
      backtrack(index, currentCombination, remaining - candidates[index]);

      // Undo
      currentCombination.pop();
    }
  }

  backtrack(0, [], target);

  return result;
}

// Test Cases
console.log(combinationSum([2, 3, 6, 7], 7)); // [ [ 2, 2, 3 ], [ 7 ] ]

console.log(combinationSum([2, 3, 5], 8)); // [ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 5 ] ]
