/*
 * Name: Combination Sum II
 *
 * Approach: Backtracking + Sorting
 *
 * Input: [10,1,2,7,6,1,5], target = 8
 *
 * Output: Unique combinations
 *
 * Explanation:
 * Use sorting to skip duplicates
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Duplicate pruning
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(target)
 */

function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);

  const result = [];

  function backtrack(start, current, remaining) {
    // Valid combination found
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    // Invalid path
    if (remaining < 0) {
      return;
    }

    for (let index = start; index < candidates.length; index++) {
      // Skip duplicates
      if (index > start && candidates[index] === candidates[index - 1]) {
        continue;
      }

      // Choose
      current.push(candidates[index]);

      // Explore
      backtrack(index + 1, current, remaining - candidates[index]);

      // Undo
      current.pop();
    }
  }

  backtrack(0, [], target);

  return result;
}

// Test Cases
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [ [ 1, 1, 6 ], [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [ [ 1, 2, 2 ], [ 5 ] ]
