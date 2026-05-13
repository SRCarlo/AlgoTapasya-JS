/*
 * Name: Permutations
 *
 * Approach: Backtracking
 *
 * Input: [1,2,3]
 *
 * Output: All permutations
 *
 * Explanation:
 * Choose unused element recursively
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Used-array recursion
 *
 * Time Complexity: O(n!)
 *
 * Space Complexity: O(n)
 */

function permute(nums) {
  const result = [];
  const used = Array(nums.length).fill(false);

  function backtrack(currentPermutation) {
    // Complete permutation formed
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]);
      return;
    }

    for (let index = 0; index < nums.length; index++) {
      if (used[index]) {
        continue;
      }

      // Choose
      used[index] = true;
      currentPermutation.push(nums[index]);

      // Explore
      backtrack(currentPermutation);

      // Undo
      currentPermutation.pop();
      used[index] = false;
    }
  }

  backtrack([]);

  return result;
}

// Test Cases
console.log(permute([1, 2, 3])); // [[ 1, 2, 3 ],[ 1, 3, 2 ],[ 2, 1, 3 ],[ 2, 3, 1 ],[ 3, 1, 2 ],[ 3, 2, 1 ]]
console.log(permute([0, 1])); // [ [ 0, 1 ], [ 1, 0 ] ]
