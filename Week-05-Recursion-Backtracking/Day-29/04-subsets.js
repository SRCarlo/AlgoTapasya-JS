/*
 * Name: Subsets
 *
 * Approach: Backtracking
 *
 * Input: [1,2,3]
 *
 * Output: All possible subsets
 *
 * Explanation: Each element has two choices: include or exclude
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Recursive decision trees
 *
 * Time Complexity: O(2^n)
 *
 * Space Complexity: O(n)
 */

function subsets(nums) {
  const result = [];

  function backtrack(index, currentSubset) {
    // Store subset
    result.push([...currentSubset]);

    for (let i = index; i < nums.length; i++) {
      // Choose
      currentSubset.push(nums[i]);

      // Explore
      backtrack(i + 1, currentSubset);

      // Undo choice
      currentSubset.pop();
    }
  }

  backtrack(0, []);

  return result;
}

// Test Cases
console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
